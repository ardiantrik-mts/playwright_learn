const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
   /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page
    this.field_username = page.locator('xpath=//input[@id="user-name"]')
    this.field_password = page.locator('xpath=//input[@id="password"]')
    this.button_login = page.locator('//input[@id="login-button"]')
    this.alert_validation = page.locator('xpath=//div[@class="error-message-container error"]')
    
  }

  async goToURL(url) {
    await this.page.goto(url)
    await expect(this.page).toHaveTitle('Swag Labs')
  }

  async setUsernameAndPassword(username, password) {
    await this.field_username.fill(username)
    await this.field_password.fill(password)
  }

  async clickLogin(){
    await this.button_login.click()
  }

  async assertGoToInventory(){
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
  }

  async assertToHaveValidation(status){
    console.log(status)
    let error_message = ""
    if(status == "both_empty" || status == "username_empty"){
        error_message = "Epic sadface: Username is required"
    }
    if(status == "password_empty"){
        error_message = "Epic sadface: Password is required"
    }
    if(status == "unknown_credential"){
        error_message = "Epic sadface: Username and password do not match any user in this service"
    }
    console.log(error_message)
    await expect(this.alert_validation).toHaveText(error_message)
  }

}