module.exports = {
    'Demo test NightWatch': function (browser) {
        browser
            .windowMaximize()
            .url('https://nightwatchjs.org/')
            .click("#docsearch")
            .assert.not.cssProperty("#docsearch", 'height', '12px')
            .setValue("#docsearch-input", "asserts")
            .click("#docsearch-item-0")
            .assert.cssProperty("div a[href = 'https://nightwatchjs.org/api/']", 'font-size', '16px')
            .assert.attributeContains("div a[href = 'https://nightwatchjs.org/api/']", 'class', 'header-links')
            .click("xpath", "//*[@id='navbarNavDropdown']/div[1]/div[4]/a")
            .execute('window.scrollTo(0, document.body.scrollHeight)')
            .assert.elementPresent('p.address')
            .assert.containsText("p.address", "Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.")
            .end();
    }
};