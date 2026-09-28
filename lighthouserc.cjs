module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      url: ["http://localhost/", "http://localhost/zh/"],
      numberOfRuns: 3,
      settings: {
        preset: "desktop",
        throttlingMethod: "simulate",
        locale: "en-US",
        onlyCategories: ["performance"],
      },
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["error", { maxNumericValue: 2500, aggregationMethod: "median" }],
        "largest-contentful-paint": ["error", { maxNumericValue: 3000, aggregationMethod: "median" }],
        "total-blocking-time": ["error", { maxNumericValue: 300, aggregationMethod: "median" }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1, aggregationMethod: "median" }],
        "speed-index": ["error", { maxNumericValue: 3500, aggregationMethod: "median" }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci/reports",
    },
  },
};
