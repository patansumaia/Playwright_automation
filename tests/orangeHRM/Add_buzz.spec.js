import { test, expect } from '@playwright/test';


const baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

//  Common login function
test('ADD BUZZ', async ({ page }) => 
 {
  await page.goto(baseURL);
  await page.locator("input[name='username']").fill(process.env.APP_USERNAME);
  await page.locator("input[type='password']").fill(process.env.APP_PASSWORD);
  await page.locator("button[type='submit']").click();
  await page.locator("//span[text()='Buzz']").click();
  await page.locator("textarea.oxd-buzz-post-input").fill("Hello Everyone, Good Afternoon!");
  await page.locator('//button[@type="submit"]').click()

  await expect(page.locator("//p[text()='Hi, Good Afternoon']")).toBeVisible();

  await page.locator("//button[normalize-space(text())='Share Photos']").click();  
   const filePath = 'test_data/cat.jpg';
  await page.locator('//input[@type="file"]').setInputFiles("test_data/cat.jpg")


  await page.locator("(//button[@type='submit'])[2]").click()
  
   await expect(page.locator("(//div[@class='orangehrm-buzz-post-body-picture'])[1]")).toBeVisible();

   await page.reload()
 });