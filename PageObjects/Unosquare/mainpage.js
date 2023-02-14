var validateContactUs = {
    contactUnosquare: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('@contactusMenu', 1000)
        .click('@contactusMenu')
        .setValue('@companyTextField', 'QA CoE course')
        .setValue('@phoneTextField', '')
        .setValue('@messageTextArea', 'This is a Random Text used in a Course')
        .click('@submitBtn')
        .waitForElementVisible('@nameWarningMsg')
    }
  };

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [validateContactUs],
    elements: {
        contactusMenu: {
            selector: "body > div.ekit-template-content-markup.ekit-template-content-header.ekit-template-content-theme-support > div > section > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-69cfc89b > div > div.elementor-element.elementor-element-fdff709.elementor-hidden-mobile.elementor-widget__width-auto.elementor-widget.elementor-widget-button > div > div > a"
        },
        joinusMenu: {
            selector: "body > div.ekit-template-content-markup.ekit-template-content-header.ekit-template-content-theme-support > div > section > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-69cfc89b > div > div.elementor-element.elementor-element-2cdfa08.elementor-widget__width-auto.elementor-tablet-align-center.elementor-widget-tablet__width-auto.elementor-align-center.elementor-hidden-mobile.elementor-widget.elementor-widget-button > div > div > a"
        },
        aboutMenu: {
            selector: "li a[href = 'https://www.unosquare.com/about-us']"
        },
        servicesMenu: {
            selector: "li a[href = 'https://www.unosquare.com/services']"
        },
        companyTextField: {
            selector: "input.hs-input[name = 'firstname']"
        },
        phoneTextField: {
            selector: "input.hs-input[name = 'email']"
        },
        messageTextArea: {
            selector: "textarea.hs-input[name = 'message']"
        },
        submitBtn: {
            selector: "input[value = 'Submit']"
        },
        nameWarningMsg: {
            selector: "//div[contains(@class, 'hs_error_rollup')]//label[contains(., 'Please complete all required fields.')]",
            locateStrategy: 'xpath'
        }
    }
};