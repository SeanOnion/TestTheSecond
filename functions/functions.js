
export class Functions {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        //this.inputBox = this.page.locator('form input')
    }

    async goto() {
        await this.page.goto('https://news.ycombinator.com')
    }

    async fillInputWith(text) {
        await this.page.waitForSelector('form input');
        //await this.inputBox.fill(text)
        await this.page.locator('form input').fill('dfadsdsafsdafsad')
    }

}
