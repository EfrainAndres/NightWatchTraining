module.exports = {
    'Unosquare': function (browser) {
        browser
            .windowMaximize()
            .url('https://www.unosquare.com')
            .waitForElementVisible('body')
        browser.assert.urlContains('unosquare')

    }
};