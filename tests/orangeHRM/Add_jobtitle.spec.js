import { test, expect } from '@playwright/test';

test('Add new job title', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login with default credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Navigate to Admin -> Job -> Job Titles
  await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click();
  await page.locator("//span[normalize-space(text())='Job']").click();
  await page.locator("//a[normalize-space(text())='Job Titles']").click();

  // Click Add button
  await page.locator("//button[contains(.,'Add')]").click();

  // Fill in job title details
  await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill('sumaia my job');
  // ');
  await page.locator('//textarea[@placeholder="Type description here"]').fill('Job role for Sumaia');
  await page.locator('//textarea[@placeholder="Add note"]').fill('Created for testing purposes');

  // click Save button
  await page.locator('//button[@type="submit"]').click();

  // Verify job title list page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
});



test('Add new job title  already exists', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login with default credentials
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Navigate to Admin -> Job -> Job Titles
  await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click();
  await page.locator("//span[normalize-space(text())='Job']").click();
  await page.locator("//a[normalize-space(text())='Job Titles']").click();

  // Click Add button
  await page.locator("//button[contains(.,'Add')]").click();

  // Fill in job title details
  await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill('sumaia my job');
  // ');
  await page.locator('//textarea[@placeholder="Type description here"]').fill('Job role for Sumaia');
  await page.locator('//textarea[@placeholder="Add note"]').fill('Created for testing purposes');

  // click Save button
  await page.locator('//button[@type="submit"]').click();

  // Verify job title list page
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
});