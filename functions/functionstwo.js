
export class FunctionsTwo {
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

    async sayInConsole(text) {
        console.log(text)
    }
}
