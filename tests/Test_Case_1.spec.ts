/*Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
*/

import { test, expect } from "@playwright/test";

test.only("test_Case1", async ({ page }) => {
    await test.step("Navigate to page", async () => {
        await page.goto("https://automationexercise.com/");
        await expect(page).toHaveURL("https://automationexercise.com");
    });
    await test.step("Click Signup", async () => {
        const loginButton = page.getByRole("link", { name: " Signup / Login" });
        await loginButton.click();
        await expect(page).toHaveURL("https://automationexercise.com/login");
    });
    await test.step("New User Signup", async () => {
        const newSignupText = page.getByRole("heading", { name: "New User Signup!" });
        await expect(newSignupText).toBeVisible();
    });
    await test.step("New User Signup", async () => {
        const newName = page.getByRole("textbox", { name: "Name" });
        const signupEmailField = page.getByRole("textbox", { name: "Email Address", exact: true }).nth(1);
        const usedName: string = "Mike Miller";
        const usedEmailAddress: string = `mikemiller${Date.now()}@gmail.com`;
        await newName.fill(usedName);
        await signupEmailField.fill(usedEmailAddress);
        const signupClick = page.getByRole("button", { name: "Signup" });
        await signupClick.click();
    });
    await test.step("Signup Page", async () => {
        await expect(page.getByText("Enter Account Information")).toBeVisible();
        const mister = page.getByRole("radio", { name: "Mr." });
        const passwordField = page.getByRole("textbox", { name: "Password *" });
        const namesDropDown = page.locator("#days");
        const monthDropDown = page.locator("#months");
        const yearDropDown = page.locator("#years");
        const signupForNewspaper = page.locator("#newsletter");
        const signupForSpecials = page.locator("#optin");
        await mister.check();
        await passwordField.fill("BLAH");
        await namesDropDown.selectOption("9");
        await monthDropDown.selectOption("February");
        await yearDropDown.selectOption("2017");
        await signupForNewspaper.check();
        await signupForSpecials.check();
    });
    await test.step("Signup Address Info", async () => {
        const firstName = page.locator("#first_name");
        const lastName = page.locator("#last_name");
        const company = page.locator("#company");
        const address1 = page.locator("#address1");
        const address2 = page.locator("#address2");
        const country = page.locator("#country");
        const state = page.locator("#state");
        const city = page.locator("#city");
        const zipcode = page.locator("#zipcode");
        const mobileNumber = page.locator("#mobile_number");
        const createAccountButton = page.getByRole("button", { name: "Create Account" });
        await firstName.fill("Bleh");
        await lastName.fill("BlehBleh");
        await company.fill("Bleh Co");
        await address1.fill("Bleh Street");
        await address2.fill("Bleh Avenue");
        await country.selectOption("Israel");
        await state.fill("BLEHHHHHHHHHHHHH");
        await city.fill("WHY ARE WE STILL DOING THIS");
        await zipcode.fill("12345");
        await mobileNumber.fill("123456678");
        await createAccountButton.click();
        await expect(page.getByText("Account Created!")).toBeVisible();
        const continueButton = page.getByRole("link", { name: "Continue" });
        await continueButton.click();
    });
    await test.step("Signup Address Info", async () => {
        await expect(page.getByText(" Logout")).toBeVisible();
        await page.getByText(" Delete Account").click();
        await expect(page.getByText("Account Deleted!")).toBeVisible();
    });
});
