import { test as lambda, expect } from "@playwright/test"
import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage"
import SpecialHotPage from "../pages/SpecialHotPage"

const email = "vinny@gmail.com"
const password = "vinny_123"
lambda("Register test_01", async ({ page, baseURL }) => {
    const register = new RegisterPage(page);
    await page.goto(baseURL + 'route=account/register');
    await register.enterFirstName("vinny");
    await register.enterLastName("vinny");
    await register.enterEmail(email);
    await register.enterTelephone("123456789");
    await register.enterPassword(password);
    await register.enterPasswordConfirm(password);
    //expect(register.isSubscribeChecked()).toBeChecked();
    await register.clickPrivacyPolicy();
    await register.clickContinueToRegister();
})