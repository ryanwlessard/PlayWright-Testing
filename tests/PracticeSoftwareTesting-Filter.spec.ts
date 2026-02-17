import { test, expect } from "@playwright/test";

test("Age Restriction", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");

    const sort = page.locator('[data-test="sort"]');
    await sort.selectOption({ value: "name,asc" });
    await expect(sort.locator("option:checked")).toHaveText("Name (A - Z)");
    await sort.selectOption({ value: "name,desc" });
    await expect(sort.locator("option:checked")).toHaveText("Name (Z - A)");
    await sort.selectOption({ value: "price,desc" });
    await expect(sort.locator("option:checked")).toHaveText("Price (High - Low)");
    await sort.selectOption({ value: "price,asc" });
    await expect(sort.locator("option:checked")).toHaveText("Price (Low - High)");
    await sort.selectOption({ value: "co2_rating,asc" });
    await expect(sort.locator("option:checked")).toHaveText("CO₂ Rating (A - E)");
    await sort.selectOption({ value: "co2_rating,desc" });
    await expect(sort.locator("option:checked")).toHaveText("CO₂ Rating (E - A)");
});
