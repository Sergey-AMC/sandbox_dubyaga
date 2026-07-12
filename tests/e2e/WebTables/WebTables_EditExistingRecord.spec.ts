import { test } from '@playwright/test';
import { WebTablePage } from '@pages/web-table-page';
import { User } from '@test-data/users'; 

test('Edit existing record in the Web Table', async ({page}) =>{
    const webTable = new WebTablePage(page);

    await webTable.open();
    await webTable.clickEditButtonOnRandomRow();
    await webTable.cleanAllValuesOnRegistationForm();
    await webTable.setAllValuesOnRegistrationForm(User.TestUserModified);
    await webTable.clickSubmitButton();
    await webTable.isTableContainsRow(User.TestUserModified);
})