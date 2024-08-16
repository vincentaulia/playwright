import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test('menu', async ({ page }) => {
  await page.getByRole('link', { name: 'Funkymonks94' }).click();
  await expect(page.getByRole('heading', { name: /Funkymonks94/i })).toBeVisible();
  await page.getByRole('link', { name: /alerts/i }).click();
  await page.getByText('Alerts', { exact: true }).click();
  await page.getByRole('button', { name: 'Notices (0)' }).click();
  await page.getByText('Notices', { exact: true }).click();
  await page.getByRole('link', { name: /watchlist/i }).click();
});

test('logout', async ({ page }) => {
  await page.getByRole('button', { name: 'Personal Tools' }).check();
  await page.getByRole('link', { name: 'Log out' }).click();
  await page.getByRole('heading', { name: 'Log out' }).click();
})