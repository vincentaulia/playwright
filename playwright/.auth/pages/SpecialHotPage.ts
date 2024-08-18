import { Page } from "@playwright/test";

export default class SpecialHotPage {

    constructor(public page: Page) {

    }

    async clickDesktopOnlyFilter() {
        await this.page.click("'Desktops'")
    }

    async addtoCart() {
        await this.page.hover("")
    }
}