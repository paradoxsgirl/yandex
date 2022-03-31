const { test, expect } = require('@playwright/test');

test('sımle yandex test', async ({ page }) => {
    await page.goto('https://yandex.ru');
    expect('css=div.home-logo__default');
});
