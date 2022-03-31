const { test, expect } = require('@playwright/test');
const { YandexPage } = require('./yandex-page');

test('yandex test', async ({ page }) => {
const Yandex = new YandexPage(page);
await Yandex.goto();
expect(Yandex.logo);
});

