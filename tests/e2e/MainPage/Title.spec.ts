import { test, expect } from '@playwright/test';
import { URLS } from '../../../constants/urls';

test('Check the title of the main page of the DEMOQA.com', async ({ page }) => {
  await page.goto(URLS.HOME);

  // Expect a title "to contain" a substring "demo".
  await expect(page).toHaveTitle(/demo/i);
});


