const { test, expect } = require('../functions/fixture')

test.describe('Test main description', () => {
    test('Test name one', async ({ page })=>{
        await page.goto('https://news.ycombinator.com');
        await expect(page).toHaveTitle(/Hacker News/);
        await page.waitForSelector('form input');
        await page.fill('form input', 'pppeeefvvdd');
        await page.locator('form input').click();
    })

    test('Test name two', async ({ functions, functionstwo, page })=>{
        await functions.goto();
        await functions.fillInputWith('asfewafwafewafffffffffffff');
        await page.locator('form input').click();
        await functionstwo.sayInConsole('Toco Monday')
    })
})