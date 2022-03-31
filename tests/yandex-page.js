const { expect } = require('@playwright/test');

exports.YandexPage =  class YandexPage {

    constructor(page) {
        this.page = page;
        this.logo = page.locator('.home-logo__default');

    }

    async goto () {
        await this.page.goto('https://yandex.ru');
    }

}

