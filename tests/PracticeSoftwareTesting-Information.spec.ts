import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/en";
import { loadEnvFile } from "node:process";

test("Contact Information", async ({ page }) => {
    const randoFirstName = faker.person.firstName();
    const randoLastName = faker.person.lastName();
    const randoEmail = faker.internet.email();
    const randoText = faker.lorem.paragraph();
    const dropdownLocator = page.locator('[data-test = "subject"]');
    const firstName = page.locator('[data-test="first-name"]');
    const lastName = page.locator('[data-test= "last-name"]');
    const email = page.locator('[data-test="email"]');
    const fillForm = page.locator('[data-test = "message"]');
    const attachment = page.locator('[data-test = "attachment"]');
    const submit = page.locator('[data-test = "contact-submit"]');

    await page.goto("https://practicesoftwaretesting.com/contact");
    await firstName.fill(randoFirstName);
    await expect(firstName).toHaveValue(randoFirstName);
    await lastName.fill(randoLastName);
    await expect(lastName).toHaveValue(randoLastName);
    await email.fill(randoEmail);
    await expect(email).toHaveValue(randoEmail);
    await dropdownLocator.selectOption({ value: "customer-service" });
    await expect(dropdownLocator.locator("option:checked")).toHaveText("Customer service");
    await attachment.setInputFiles("C:\\Users\\lessa\\OneDrive\\Desktop\\attach me.txt");
    await submit.click();
});
