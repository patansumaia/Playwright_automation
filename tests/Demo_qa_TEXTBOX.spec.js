import { test, expect } from '@playwright/test';

const url = 'https://demoqa.com/text-box'

test ('Verify text box', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.DEMO_QA_FULLNAME);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(process.env.DEMO_QA_EMAIL);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(process.env.DEMO_QA_CURRENTADDRESS);
  await page.locator('#permanentAddress').fill(process.env.DEMO_QA_PERMANENTADDRESS);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText("Name:PATAN SUMAIA")).toBeVisible();
  await expect(page.getByText("Email:sumaia@gmail.com")).toBeVisible();
  await expect(page.getByText("Current Address :Anantapur, Andhra Pradesh")).toBeVisible();
  await expect(page.getByText("Permananet Address :Anantapur, Andhra Pradesh")).toBeVisible();
});



test ('Verify text box2', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('sumaiapatan');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('sumaiapatan@gamil.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore.');
  await page.locator('#permanentAddress').fill('Anantapur');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText("Name:sumaiapatan")).toBeVisible();
  await expect(page.getByText("Email:sumaiapatan@gamil.com")).toBeVisible();
  await expect(page.getByText("Current Address :Bangalore.")).toBeVisible();
  await expect(page.getByText("Permananet Address :Anantapur")).toBeVisible();
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

});