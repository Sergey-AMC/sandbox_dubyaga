import { test, expect } from '@playwright/test';
import { URLS } from '@constants/urls';
import { SelectElement } from '@pages/elements';
import { WebTablesPage } from '@pages/WebTablesPage';
import { makeScreenshot } from '@utils/screenshot';
import { users } from '@users/users';   




test('Add new record to the Web Table', async ({page}) =>{
    // Create the instance of the SelectElement class
    const selectElement = new SelectElement(page);    
    // Navigate to the Elements page
    await page.goto(URLS.ELEMENTS);
    // Select the Web Tables element on the page
    await selectElement.webTables();


    const webTablesPage = new WebTablesPage(page);

    //Click on Add button toi add new record to the Web Table
    await webTablesPage.clickAdd();

    //Fill out fields by Test Data (use WebTables credentials)
    await webTablesPage.setFirstName(users.WebTables.firstName);  
    await webTablesPage.setLastName(users.WebTables.lastName);
    await webTablesPage.setEmail(users.WebTables.email);
    await webTablesPage.setAge(users.WebTables.age);  
    await webTablesPage.setSalary(users.WebTables.salary);
    await webTablesPage.setDepartment(users.WebTables.department);

    //Click on Submit button to add new record to the Web Table
    await webTablesPage.clickSubmit();

    // Verify that the new record has been added to the Web Table
    // Get all rows from the Web Table and check if the last row contains the expected values
    const allRows = await webTablesPage.getAllRows();   
    const lastRow = allRows[allRows.length - 1]; 
    
    
    const exists = await webTablesPage.isRowExists(users.WebTables.firstName);

    expect(exists).toBeTruthy();


    await makeScreenshot(page, 'WebTables_AddNewRecord');

   
})