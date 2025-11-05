import { test, expect } from '@playwright/test';


const baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';


test('Valid login and Add employment_status', async ({ page }) => 
 {
  await page.goto(baseURL);
  await page.locator("input[name='username']").fill(process.env.APP_USERNAME);
  await page.locator("input[type='password']").fill(process.env.APP_PASSWORD);
  await page.locator("button[type='submit']").click();
  await page.locator("//span[normalize-space()='Admin']").click();
  await page.locator("//span[normalize-space()='Job']").click();
  await page.locator("//a[normalize-space()='Employment Status']").click();
  await page.locator("//button[contains(normalize-space(.),'Add')]").click();
  await page.locator('form').getByRole('textbox').fill('Intern');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Employment Status' })).toBeVisible();
 });