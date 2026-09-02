import { expect, test } from "@playwright/test";

test("admin staging application is available", async ({ page, baseURL }) => {
  test.skip(!baseURL, "ADMIN_BASE_URL is not configured");
  const response = await page.goto("/");
  expect(response?.ok()).toBeTruthy();
  await expect(page.locator("body")).toBeVisible();
});
