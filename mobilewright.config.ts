import { defineConfig } from "mobilewright";

export default defineConfig({
  testDir: "./tests/mobile",
  timeout: 60_000,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: process.env.CI ? "json" : "html",
});
