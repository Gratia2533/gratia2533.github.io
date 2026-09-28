import { gzipSync } from "node:zlib";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const distDirectory = resolve(projectRoot, "dist");
const reportDirectory = resolve(projectRoot, ".lighthouseci");
const budgets = JSON.parse(
  await readFile(resolve(projectRoot, "performance-budget.json"), "utf8"),
);
const imageExtensions = new Set([".avif", ".gif", ".jpg", ".jpeg", ".png", ".svg", ".webp"]);
const compressedExtensions = new Set([".css", ".html", ".js", ".json", ".svg"]);

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? listFiles(path) : [path];
    }),
  );
  return nested.flat();
}

const files = await listFiles(distDirectory);
const metrics = {
  jsGzipBytes: 0,
  imageBytes: 0,
  distBytes: 0,
  estimatedTransferBytes: 0,
};
const assets = [];

for (const file of files) {
  const extension = extname(file).toLowerCase();
  const size = (await stat(file)).size;
  const contents = compressedExtensions.has(extension) ? await readFile(file) : null;
  const transferSize = contents ? gzipSync(contents).length : size;

  metrics.distBytes += size;
  metrics.estimatedTransferBytes += transferSize;
  if (extension === ".js") metrics.jsGzipBytes += transferSize;
  if (imageExtensions.has(extension)) metrics.imageBytes += size;
  assets.push({ path: relative(projectRoot, file), bytes: size, transferBytes: transferSize });
}

const failures = Object.entries(budgets)
  .filter(([metric, budget]) => metrics[metric] > budget)
  .map(([metric, budget]) => `${metric}: ${metrics[metric]} > ${budget}`);
const report = { metrics, budgets, assets };
const summary = [
  "## Performance asset budgets",
  "",
  "| Metric | Actual | Budget |",
  "| --- | ---: | ---: |",
  `| JS gzip | ${metrics.jsGzipBytes} B | ${budgets.jsGzipBytes} B |`,
  `| Images | ${metrics.imageBytes} B | ${budgets.imageBytes} B |`,
  `| Total dist | ${metrics.distBytes} B | ${budgets.distBytes} B |`,
  `| Estimated compressed transfer | ${metrics.estimatedTransferBytes} B | tracked |`,
  "",
].join("\n");

await mkdir(reportDirectory, { recursive: true });
await writeFile(resolve(reportDirectory, "asset-sizes.json"), `${JSON.stringify(report, null, 2)}\n`);
console.log(summary);

if (process.env.GITHUB_STEP_SUMMARY) {
  await writeFile(process.env.GITHUB_STEP_SUMMARY, summary, { flag: "a" });
}

if (failures.length > 0) {
  throw new Error(`Performance budget exceeded:\n${failures.join("\n")}`);
}
