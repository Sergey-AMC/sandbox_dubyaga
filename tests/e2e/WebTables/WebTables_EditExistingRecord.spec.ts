import { test, expect } from '@playwright/test';
import { URLS } from '@constants/urls';
import { SelectElement } from '@pages/elements';
import { WebTablesPage } from '@pages/WebTablesPage';
import { makeScreenshot } from '@utils/screenshot';
import { users } from '@users/users'; 

test('Edit ecisting record in the Web Table', async ({page}) =>{
    // Create the instance of the SelectElement class
    const selectElement = new SelectElement(page);  
    // Navigate to the Elements page
    await page.goto(URLS.ELEMENTS);
    // Select the Web Tables element on the page
    await selectElement.webTables();
    // Create the instance of the WebTablesPage class
    const webTablesPage = new WebTablesPage(page);

    //
    function getRandomInt(min: number, max: number): number { 
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    const randomRow = getRandomInt(1, await webTablesPage.getRowsCount());
    await webTablesPage.clickEdit(randomRow);

    //Read all values of cell in the <randomrow> row
    const firstNameBeforeEdit = await webTablesPage.getFirstName(randomRow); 
    const lastNameBeforeEdit = await webTablesPage.getLastName(randomRow);
    const ageBeforeEdit = await webTablesPage.getAge(randomRow);
    const emailBeforeEdit = await webTablesPage.getEmail(randomRow);
    const salaryBeforeEdit = await webTablesPage.getSalary(randomRow);
    const departmentBeforeEdit = await webTablesPage.getDepartment(randomRow);

    //Fill out fields by adding '1' to each cell from the <randomrow> row
    await webTablesPage.setFirstName(await webTablesPage.getFirstName(randomRow)  +'1');  
    await webTablesPage.setLastName(await webTablesPage.getLastName(randomRow) +'1');
    await webTablesPage.setEmail('1' + await webTablesPage.getEmail(randomRow));
    await webTablesPage.setAge(String(Number(await webTablesPage.getAge(randomRow)) + 1));  
    await webTablesPage.setSalary(String(Number(await webTablesPage.getSalary(randomRow)) + 1));
    await webTablesPage.setDepartment(await webTablesPage.getDepartment(randomRow) +'1');
    await webTablesPage.clickSubmit();

    //get the values from the Web Table after editing the <randomrow> row>
    const firstNameAfterEdit = await webTablesPage.getFirstName(randomRow);
    const lastNameAfterEdit = await webTablesPage.getLastName(randomRow);
    const ageAfterEdit = await webTablesPage.getAge(randomRow);
    const emailAfterEdit = await webTablesPage.getEmail(randomRow);
    const salaryAfterEdit = await webTablesPage.getSalary(randomRow);
    const departmentAfterEdit = await webTablesPage.getDepartment(randomRow);

    //Verify the edited record in the <randomrow> row
    expect(firstNameAfterEdit).toBe(firstNameBeforeEdit  +'1');
    expect(lastNameAfterEdit).toBe(lastNameBeforeEdit +'1');
    expect(ageAfterEdit).toBe(String(Number(ageBeforeEdit) + 1));
    expect(emailAfterEdit).toBe('1' + emailBeforeEdit);
    expect(salaryAfterEdit).toBe(String(Number(salaryBeforeEdit) + 1));
    expect(departmentAfterEdit).toBe(departmentBeforeEdit +'1');

    await makeScreenshot(page, 'Edit_WebTable_Record');
})