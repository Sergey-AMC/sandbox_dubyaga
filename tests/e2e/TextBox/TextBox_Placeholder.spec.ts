import { test, expect } from '@playwright/test';
import { SelectElement } from '@pages/elements';
import { URLS } from '@constants/urls';
import { makeScreenshot } from '@utils/screenshot';
import { users } from '@users/users';



test('Check Place Holder value on the Text Box page (Elements)', async ({page}) => {
    
    // Create the instance of the SelectElement class
    const selectElement = new SelectElement(page);    
    // Navigate to the Elements page
    await page.goto(URLS.ELEMENTS);
    // Select the Text Box element on the page
    await selectElement.textBox();
    
    // Check placeholder value for each field
    // Check placeholder value for User Name field
    await expect(page.locator('#userName')).toHaveAttribute('placeholder', users.userTextBox.fullname);
    // Check placeholder value for Email field
    await expect(page.locator('#userEmail')).toHaveAttribute('placeholder', users.userTextBox.email);
    // Check placeholder value for Current Address field
    await expect(page.locator('#currentAddress')).toHaveAttribute('placeholder', users.userTextBox.currentaddress);

    // Make screenshot of the Text Box page after verification
    await makeScreenshot(page,'PlaceHolder');
    
    
})