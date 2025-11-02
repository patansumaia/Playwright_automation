import { test, expect } from '@playwright/test';

import swaglabdata from "../test_data/swaglabdata.json"

test('login with valid crendentials', async ({page})=>{
await page.goto('https://www.saucedemo.com/v1/');
await page.locator("(//input[@class='form_input'])[1]").fill(swaglabdata.username);
await page.locator("input[type='password']").fill(swaglabdata.password);
await page.locator("input[type='submit']").click();
await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
})

test('login with valid username and invalid password', async ({page})=>{
await page.goto('https://www.saucedemo.com/v1/');
await page.locator("input[name='user-name']").fill(swaglabdata.username);
await page.locator("input[type='password']").fill(swaglabdata.invalidpassword);
await page.locator("input[type='submit']").click();
await expect(page.locator("h3[data-test='error']")).toBeVisible()
})

test('login with invalid username and valid password', async ({page})=>{
await page.goto('https://www.saucedemo.com/v1/');
await page.locator("input[name='user-name']").fill(swaglabdata.invalidusername);
await page.locator("input[type='password']").fill(swaglabdata.password);
await page.locator("input[type='submit']").click();
await expect(page.locator("h3[data-test='error']")).toBeVisible()
})

test('login with invalid username and invalid password', async ({page})=>{
await page.goto('https://www.saucedemo.com/v1/');
await page.locator("(//input[@class='form_input'])[1]").fill(swaglabdata.invalidusername);
await page.locator("input[type='password']").fill(swaglabdata.invalidpassword);
await page.locator("input[type='submit']").click();
await expect(page.locator("h3[data-test='error']")).toBeVisible()
})
test('login with Valid crendentials', async ({page})=>{
await page.goto('https://www.saucedemo.com/v1/');
await page.locator("(//input[@class='form_input'])[1]").fill(swaglabdata.usernamelu);
await page.locator("input[type='password']").fill(swaglabdata.password);
await page.locator("input[type='submit']").click();
await expect(page.locator("h3[data-test='error']")).toBeVisible()
})

test('login with valid Crendentials', async ({page})=>{
await page.goto('https://www.saucedemo.com/v1/');
await page.locator("(//input[@class='form_input'])[1]").fill(swaglabdata.usernamepu);
await page.locator("input[type='password']").fill(swaglabdata.password);
await page.locator("input[type='submit']").click();
await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
})

test('login with valid crendentialS', async ({page})=>{
await page.goto('https://www.saucedemo.com/v1/');
await page.locator("(//input[@class='form_input'])[1]").fill(swaglabdata.usernamepgu);
await page.locator("input[type='password']").fill(swaglabdata.password);
await page.locator("input[type='submit']").click();
await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
})

test('try login without entering crendentials', async ({page})=>{
await page.goto('https://www.saucedemo.com/v1/');
await page.locator("input[type='submit']").click();
await expect(page.locator("h3[data-test='error']")).toBeVisible()
})
