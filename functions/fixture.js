const base = require('@playwright/test')
const {Functions} = require('./functions')
const {FunctionsTwo} = require('./functionstwo')

exports.test = base.test.extend({

  functions: async({ page }, use) => {
    const functions = new Functions(page);
    // stuff to run at the start of each test that this is used
    // await page.goto('https://jobspresso.co/remote-work/')
    await use(functions);
    //await page.removeAll(); //optional? test
  },
    //  Short version that SB uses---------
    //  functions: async({ page }, use) => {
    //    await use(new Functions(page))
    //  }---------------------------------------------

  functionstwo: async({ page }, use) => {
    await use(new FunctionsTwo(page))
  }
});
exports.expect = base.expect;

