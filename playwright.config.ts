import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: ["web/**/*.spec.ts", "admin/**/*.spec.ts"],
  outputDir: "test-results/playwright",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ["line"],
    ["junit", { outputFile: "test-results/playwright-junit.xml" }],
    ["allure-playwright", { resultsDir: "allure-results" }],
  ],
  use: {
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "web-chromium",
      testMatch: "web/**/*.spec.ts",
      use: { ...devices["Desktop Chrome"], baseURL: process.env.WEB_BASE_URL },
    },
    {
      name: "admin-chromium",
      testMatch: "admin/**/*.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.ADMIN_BASE_URL,
      },
    },
    {
      name: "web-firefox",
      testMatch: "web/**/*.spec.ts",
      use: { ...devices["Desktop Firefox"], baseURL: process.env.WEB_BASE_URL },
    },
    {
      name: "web-webkit",
      testMatch: "web/**/*.spec.ts",
      use: { ...devices["Desktop Safari"], baseURL: process.env.WEB_BASE_URL },
    },
  ],
});
