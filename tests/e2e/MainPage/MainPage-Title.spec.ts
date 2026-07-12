import { test } from '@playwright/test';
import { HomePage } from '@pages/home-page';

test('Check the title of the home page of the DEMOQA.com site', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  await homePage.verifyPageTitle(/demo/i);
});


