import { Page } from "@playwright/test";

export default class HomePage {

    constructor(public page: Page) {

    }

    async enterEmail(email: string) {
        await this.page.locator("#input-email").type(email);
    }

    async enterPassword(password: string) {
        await this.page.locator("#input-password").type(password);
    }

    async clickSpecialHotBtn() {
        await this.page.click("'Special Hot'");
    }
}