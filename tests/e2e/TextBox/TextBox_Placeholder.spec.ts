import { test, expect } from '@playwright/test';
import { SelectElement } from '@pages/elements';
import { URLS } from '@constants/urls';
import { makeScreenshot } from '@utils/screenshot';
import { users } from '@users/users'; 
import { TextBoxPage } from '@pages/textBoxPage';


test('Check Place Holder value on the Text Box page (Elements)', async ({page}) => {
    
    // Create the instances 
    const selectElement = new SelectElement(page);    
    // Navigate to the Elements page
    await page.goto(URLS.ELEMENTS);
    // Select the Text Box element on the page
    await selectElement.textBox();
    
    const textBoxPage = new TextBoxPage(page);
    const userPlaceholder = await textBoxPage.getUserNamePlaceholder();
    const emailPlaceholder = await textBoxPage.getEmailPlaceholder();
    const currentAddressPlaceholder = await textBoxPage.getCurrentAddressPlaceholder();

    // Check placeholder value for each field
    // Check placeholder value for User Name field
    expect(userPlaceholder).toBe(users.userTextBox.fullname);
    
    // Check placeholder value for Email field
    expect(emailPlaceholder).toBe(users.userTextBox.email);
    
    // Check placeholder value for Current Address field
    expect(currentAddressPlaceholder).toBe(users.userTextBox.currentaddress);

    // Make screenshot of the Text Box page after verification
    await makeScreenshot(page,'PlaceHolder');
    
    
})