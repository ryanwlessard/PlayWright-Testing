import { test, expect } from "@playwright/test";

test("Hand Tools Selection", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator('[data-test="nav-categories"]').click();
    await page.locator('[data-test="nav-hand-tools"]').click();
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/category/hand-tools");
    await page.locator('[data-test="nav-home"]').click();
});
test("Power Tools Selection", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator('[data-test="nav-categories"]').click();
    await page.locator('[data-test="nav-power-tools"]').click();
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/category/power-tools");
    await page.locator('[data-test="nav-home"]').click();
});
test("Other Selection", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator('[data-test="nav-categories"]').click();
    await page.locator('[data-test="nav-other"]').click();
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/category/other");
    await page.locator('[data-test="nav-home"]').click();
});
test("Special Tools Selection", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator('[data-test="nav-categories"]').click();
    await page.locator('[data-test="nav-special-tools"]').click();
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/category/special-tools");
    await page.locator('[data-test="nav-home"]').click();
});
test("Nav Rentals Selection", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    await page.locator('[data-test="nav-categories"]').click();
    await page.locator('[data-test="nav-rentals"]').click();
    await expect(page).toHaveURL("https://practicesoftwaretesting.com/rentals");
    await page.locator('[data-test="nav-home"]').click();
});
