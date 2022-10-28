import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('standart_user');

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await page.getByText('Epic sadface: Username and password do not match any user in this serviceLoginAc').click();

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').press('ArrowLeft');

  await page.locator('[data-test="username"]').press('ArrowLeft');

  await page.locator('[data-test="username"]').press('ArrowLeft');

  await page.locator('[data-test="username"]').press('ArrowLeft');

  await page.locator('[data-test="username"]').press('ArrowLeft');

  await page.locator('[data-test="username"]').press('ArrowLeft');

  await page.locator('[data-test="username"]').press('ArrowRight');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  await page.locator('a:has-text("2")').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  await page.locator('.checkout_info').click();

  await page.locator('[data-test="firstName"]').click();

  await page.locator('[data-test="firstName"]').fill('first name');

  await page.locator('[data-test="lastName"]').click();

  await page.locator('[data-test="lastName"]').fill('lasto');

  await page.locator('[data-test="postalCode"]').click();

  await page.locator('[data-test="postalCode"]').fill('123');

  await page.locator('[data-test="continue"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  await page.locator('[data-test="finish"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

});