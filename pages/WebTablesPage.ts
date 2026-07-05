import { Page, Locator } from '@playwright/test';

export class WebTablesPage {
    private buttonAdd: Locator;

    constructor(private page: Page) {
        this.buttonAdd = this.page.locator('#addNewRecordButton');
    }
//Click on the Add button to open the form for adding a new row to the Web Table
public async clickAdd(): Promise<void> {
    await this.buttonAdd.click();}

//Click Submit button to add new row to the Web Table
public async clickSubmit(): Promise<void> {
    await this.page.locator('#submit').click();
}

//Set First Name value in the form fields for adding a new row to the Web Table
public async setFirstName(firstName: string): Promise<void> {
    await this.page.locator('#firstName').fill(firstName);
}

//Set Last Name value in the form fields for adding a new row to the Web Table
public async setLastName(lastName: string): Promise<void> {
    await this.page.locator('#lastName').fill(lastName);
}

//Set Email value in the form fields for adding a new row to the Web Table
public async setEmail(email: string): Promise<void> {
    await this.page.locator('#userEmail').fill(email);
}

//Set Age value in the form fields for adding a new row to the Web Table
public async setAge(age: string): Promise<void> {
    await this.page.locator('#age').fill(age);
}

//Set Salary value in the form fields for adding a new row to the Web Table
public async setSalary(salary: string): Promise<void> {
    await this.page.locator('#salary').fill(salary);
}

//Set Department value in the form fields for adding a new row to the Web Table
public async setDepartment(department: string): Promise<void> {
    await this.page.locator('#department').fill(department);
}

//Get all rows from the Web Table
public async getAllRows(): Promise<string[]> {
    return await this.page.locator('table tbody tr').allTextContents();
}


//Check if a row with the expected text exists in the Web Table
public async isRowExists(expectedText: string): Promise<boolean> {
    const rows = await this.page.locator('table tbody tr').allTextContents();

    return rows.some(row => row.includes(expectedText));
}


}