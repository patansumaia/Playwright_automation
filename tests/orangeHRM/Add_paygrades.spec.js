import { test, expect } from '@playwright/test'

test('Add pay grade - sumaia', async ({ page }) => {
  // Go to login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Navigate: Admin -> Job -> Pay Grades
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job').click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();

  // Click Add
  // Use a text-based locator to avoid icon mismatches
  await page.locator("//button[contains(normalize-space(.),'Add')]").click();

  // Fill the pay grade name and save
  await page.locator('form').getByRole('textbox').fill('sumaia');
  await page.getByRole('button', { name: 'Save' }).click();

  // Assert we are on the Edit Pay Grade page (or that the heading is visible)
  await expect(page.getByRole('heading', { name: 'Edit Pay Grade' })).toBeVisible();
});