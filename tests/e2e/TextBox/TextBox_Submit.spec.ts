import { test, expect } from '@playwright/test';
import { URLS } from '@constants/urls';
import { SelectElement } from '@pages/elements';
import { users } from '@users/users';
import { TextBoxPage } from '@pages/textBoxPage';

test('TextBox happy path workflow', async ({page}) =>{
     // Create the instance of the SelectElement class
        const selectElement = new SelectElement(page);    
        // Navigate to the Elements page
        await page.goto(URLS.ELEMENTS);
        // Select the Text Box element on the page
        await selectElement.textBox();

        const textBoxPage = new TextBoxPage(page);
 
        //Fill out fields by Test Data (use userTextBoxSubmit credentials)
        //Fill out User Name
        //await textBoxPage.clearUserName();
        await textBoxPage.setUserName(users.userTextBoxSubmit.name);
        await textBoxPage.setEmail(users.userTextBoxSubmit.email);
        await textBoxPage.setCurrentAddress(users.userTextBoxSubmit.curAddress);
        await textBoxPage.setPermanentAddress(users.userTextBoxSubmit.perAddress);

        //Click on the Submit button
        await textBoxPage.clickSubmit();
        

        // Check result
        // Read all records from appeared output field
        // Read Name value
        let nameResult = await textBoxPage.getUserNameOutput();
        nameResult = nameResult.replace('Name:', '').trim(); 

        // Read Email value
        let emailResult = await textBoxPage.getEmailOutput();
        emailResult = emailResult.replace('Email:', '').trim();

        // Read Current Address value
        let curAddressResult = await textBoxPage.getCurrentAddressOutput();
        curAddressResult = curAddressResult.replace('Current Address :', '').trim();
        
        // Read Permanent Address value
        let perAddressResult = await textBoxPage.getPermanentAddressOutput();
        perAddressResult = perAddressResult.replace('Permananet Address :', '').trim();

        expect(nameResult).toBe(users.userTextBoxSubmit.name);
        expect(emailResult).toBe(users.userTextBoxSubmit.email);
        expect(curAddressResult).toBe(users.userTextBoxSubmit.curAddress);
        expect(perAddressResult).toBe(users.userTextBoxSubmit.perAddress);

    })