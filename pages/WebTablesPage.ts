import { WebTable } from '@elements/WebTable';
import { Page, Locator } from '@playwright/test';

export class WebTablesPage {

    private buttonAdd: Locator;
    private firstName: WebTable;
    private lastName: WebTable;
    private age: WebTable;
    private email: WebTable;
    private salary: WebTable;
    private department: WebTable;
    private submitButton: Locator;
    private editButton: Locator;
    private deleteButton: Locator;
    

    constructor(private page: Page) {
        this.buttonAdd = this.page.locator('#addNewRecordButton');
        this.firstName = new WebTable(this.page.locator('#firstName')); 
        this.lastName = new WebTable(this.page.locator('#lastName'));
        this.age = new WebTable(this.page.locator('#age'));
        this.email = new WebTable(this.page.locator('#userEmail'));
        this.salary = new WebTable(this.page.locator('#salary'));
        this.department = new WebTable(this.page.locator('#department'));
        this.submitButton = this.page.locator('#submit');
        this.editButton = this.page.locator('.action-buttons #edit-record-1');
        this.deleteButton = this.page.locator('.action-buttons #delete-record-1');
    }
//Click on the Add button to open the form for adding a new row to the Web Table
public async clickAdd(): Promise<void> {
    await this.buttonAdd.click();}

//Click Submit button to add new row to the Web Table
public async clickSubmit(): Promise<void> {
    await this.page.locator('#submit').click();}

//Set First Name value in the form fields for adding a new row to the Web Table
public async setFirstName(firstName: string): Promise<void> {
    await this.page.locator('#firstName').fill(firstName);}

//Set Last Name value in the form fields for adding a new row to the Web Table
public async setLastName(lastName: string): Promise<void> {
    await this.page.locator('#lastName').fill(lastName);}

//Set Email value in the form fields for adding a new row to the Web Table
public async setEmail(email: string): Promise<void> {
    await this.page.locator('#userEmail').fill(email);}

//Set Age value in the form fields for adding a new row to the Web Table
public async setAge(age: string): Promise<void> {
    await this.page.locator('#age').fill(age);}

//Set Salary value in the form fields for adding a new row to the Web Table
public async setSalary(salary: string): Promise<void> {
    await this.page.locator('#salary').fill(salary);}

//Set Department value in the form fields for adding a new row to the Web Table
public async setDepartment(department: string): Promise<void> {
    await this.page.locator('#department').fill(department);}

//Get all rows from the Web Table
public async getAllRows(): Promise<string[]> {
    return await this.page.locator('table tbody tr').allTextContents();}

//Get the value of First Name cell in the Web Table by row 
public async getFirstName(rowIndex: number): Promise<string> {
    const cellLocator = this.page.locator(`table tbody tr:nth-child(${rowIndex}) td:nth-child(${1})`);
    return await cellLocator.innerText();} 
    
//Get the value of Last Name cell in the Web Table by row 
public async getLastName(rowIndex: number): Promise<string> {
    const cellLocator = this.page.locator(`table tbody tr:nth-child(${rowIndex}) td:nth-child(${2})`);
    return await cellLocator.innerText();}    

//Get the value of Age cell in the Web Table by row 
public async getAge(rowIndex: number): Promise<string> {
    const cellLocator = this.page.locator(`table tbody tr:nth-child(${rowIndex}) td:nth-child(${3})`);
    return await cellLocator.innerText();}

//Get the value of Email cell in the Web Table by row 
public async getEmail(rowIndex: number): Promise<string> {
    const cellLocator = this.page.locator(`table tbody tr:nth-child(${rowIndex}) td:nth-child(${4})`);
    return await cellLocator.innerText();}  
    
//Get the value of Salary cell in the Web Table by row 
public async getSalary(rowIndex: number): Promise<string> {
    const cellLocator = this.page.locator(`table tbody tr:nth-child(${rowIndex}) td:nth-child(${5})`);
    return await cellLocator.innerText();} 
    
//Get the value of Department cell in the Web Table by row 
public async getDepartment(rowIndex: number): Promise<string> {
    const cellLocator = this.page.locator(`table tbody tr:nth-child(${rowIndex}) td:nth-child(${6})`);
    return await cellLocator.innerText();}     

//Check if a row with the expected text exists in the Web Table
public async isRowExists(expectedText: string): Promise<boolean> {
    const rows = await this.page.locator('table tbody tr').allTextContents();

    return rows.some(row => row.includes(expectedText));}

// Get the count of rows in the Web Table
public async getRowsCount(): Promise<number> {
    return await this.page.locator('table tbody tr').count();}

// Click Edit button for a specific row in the Web Table
public async clickEdit(rowIndex: number): Promise<void> {
    await this.page.locator(`#edit-record-${rowIndex}`).click();}


}