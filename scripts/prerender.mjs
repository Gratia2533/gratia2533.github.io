import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

process.env.NODE_ENV = "production";

const { createServer } = await import("vite");
const projectRoot = resolve(import.meta.dirname, "..");
const distDirectory = resolve(projectRoot, "dist");
const template = await readFile(resolve(distDirectory, "index.html"), "utf8");
const manifest = JSON.parse(
  await readFile(resolve(distDirectory, ".vite", "manifest.json"), "utf8"),
);
const server = await createServer({
  root: projectRoot,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const { render } = await server.ssrLoadModule("/src/entry-server.tsx");

  for (const route of [
    { directory: distDirectory, language: "en", htmlLanguage: "en" },
    { directory: resolve(distDirectory, "zh"), language: "zh", htmlLanguage: "zh-Hant" },
  ]) {
    let appHtml = await render(route.language);
    for (const [source, output] of Object.entries(manifest)) {
      if (output.file) {
        appHtml = appHtml.replaceAll(`/${source}`, `/${output.file}`);
      }
    }
    const html = template
      .replace('<html lang="en">', `<html lang="${route.htmlLanguage}">`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    await mkdir(route.directory, { recursive: true });
    await writeFile(resolve(route.directory, "index.html"), html);
  }
} finally {
  await server.close();
}
