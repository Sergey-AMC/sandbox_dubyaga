import { test } from '@playwright/test';
import { WebTablePage } from '@pages/web-table-page';
import { User } from '@test-data/users';   

test('Add new record to the Web Table', async ({page}) =>{
    const webTable = new WebTablePage(page);

    await webTable.open();
    await webTable.clickAddButton();
    await webTable.setAllValuesOnRegistrationForm(User.TestUser);
    await webTable.clickSubmitButton();
    await webTable.isTableContainsRow(User.TestUser);
})