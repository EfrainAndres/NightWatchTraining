module.exports = {
  'Demo test unosquare': function (browser) {
    browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .assert.attributeContains("li a[href = 'https://www.unosquare.com/services/']", 'class', 'nav')
      .assert.attributeEquals("li a[href = 'https://www.unosquare.com/services/']", 'class', 'ekit-menu-nav-link')
      .assert.containsText("li a[href = 'https://www.unosquare.com/services/']", "Services") //This is case Sensitive
      .assert.cssProperty("li a[href = 'https://www.unosquare.com/about-us']", 'display', 'flex')
      .assert.not.cssProperty("li a[href = 'https://www.unosquare.com/about-us']", 'font-size', '12px')
      .end();
  }
};
