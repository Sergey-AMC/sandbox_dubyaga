import { test } from '@playwright/test';
import { User } from '@test-data/users'; 
import { TextBoxPage } from '@pages/text-box-page';
import { verifyPlaceholder } from '@helpers/inputs.helper';

test('Check Place Holder value on the Text Box page (Elements)', async ({page}) => {
    const textBox = new TextBoxPage(page);

    await textBox.open();
    await verifyPlaceholder(textBox.userName,User.Placeholder.FullName);
    await verifyPlaceholder(textBox.email,User.Placeholder.Email);
    await verifyPlaceholder(textBox.currentAddress,User.Placeholder.CurrentAddress);
})