import { test } from '@playwright/test';
import { User } from '@test-data/users';
import { TextBoxPage } from '@pages/text-box-page';

test('TextBox happy path workflow', async ({page}) =>{
    const textBox = new TextBoxPage(page);    
    
    await textBox.open();
    await textBox.setFullName(User.TestUser.FullName);
    await textBox.setEmail(User.TestUser.Email);
    await textBox.setCurrentAddress(User.TestUser.CurrentAddress);
    await textBox.setPermanentAddress(User.TestUser.PermanentAddress);
    await textBox.clickSubmitButton();
    await textBox.verifyFullNameRecord(User.TestUser.FullName);
    await textBox.verifyEmailRecord(User.TestUser.Email);
    await textBox.verifyCurrentAddressRecord(User.TestUser.CurrentAddress);
    await textBox.verifyPermanentAddressRecord(User.TestUser.PermanentAddress);
})