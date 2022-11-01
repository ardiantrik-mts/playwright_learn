const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../../pages/login.page')

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goToURL('https://www.saucedemo.com')
});

test('Login Test Success - Successful Attempt', async ({page}) => {
    const loginPage = new LoginPage(page)
    
    await loginPage.setUsernameAndPassword('standard_user', 'secret_sauce')
    await loginPage.clickLogin()

    await loginPage.assertGoToInventory()
})

test('Login Test Failed - Empty Username and Password', async ({page}) => {
    const loginPage = new LoginPage(page)
    
    await loginPage.clickLogin()

    await loginPage.assertToHaveValidation('both_empty')
})

test('Login Test Failed - Empty Username Only', async ({page}) => {
    const loginPage = new LoginPage(page)
    
    await loginPage.setUsernameAndPassword('', 'secret_sauce')
    await loginPage.clickLogin()

    await loginPage.assertToHaveValidation('username_empty')
})

test('Login Test Failed - Empty Password Only', async ({page}) => {
    const loginPage = new LoginPage(page)
    
    await loginPage.setUsernameAndPassword('standard_user', '')
    await loginPage.clickLogin()

    await loginPage.assertToHaveValidation('password_empty')
})

test('Login Test Failed - Unknown Auth', async ({page}) => {
    const loginPage = new LoginPage(page)
    
    await loginPage.setUsernameAndPassword('standard_user123', '123')
    await loginPage.clickLogin()

    await loginPage.assertToHaveValidation('unknown_credential')
})