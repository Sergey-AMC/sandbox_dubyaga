import { test, expect } from '@playwright/test';
import { URLS } from '@constants/urls';
import { SelectElement } from '@pages/elements';
import { users } from '@users/users';

test('TextBox happy path workflow', async ({page}) =>{
     // Create the instance of the SelectElement class
        const selectElement = new SelectElement(page);    
        // Navigate to the Elements page
        await page.goto(URLS.ELEMENTS);
        // Select the Text Box element on the page
        await selectElement.textBox();

        //Fill out fields by Test Data
        //Fill out User Name
        await page.getByRole('textbox', { name: 'Full Name' }).fill(users.userTextBoxSubmit.name);
        //Fill out Email
        await page.getByRole('textbox', { name: 'name@example.com' }).fill(users.userTextBoxSubmit.email);
        //Fill out Current Address
        await page.getByRole('textbox', { name: 'Current Address' }).fill(users.userTextBoxSubmit.curAddress);
        //Fill out Permanent Address
        await page.locator('#permanentAddress').fill(users.userTextBoxSubmit.perAddress);

        //Click on the Submit button
        await page.getByRole('button', { name: 'Submit' }).click();

        // Check result
        // Read all records from appeared output field
        // Read Name value
        const nameOutput= await page.locator('#userName').inputValue();
        // Read Email value
        const emailOutput= await page.locator('#userEmail').inputValue();
        // Read Current Address value
        const curAddressOutput= await page.locator('#currentAddress').nth(0).inputValue();
        // Read Permanent Address value
        const perAddressOutput= await page.locator('#permanentAddress').nth(0).inputValue();

        await expect(nameOutput).toBe(users.userTextBoxSubmit.name);
        await expect(emailOutput).toBe(users.userTextBoxSubmit.email);
        await expect(curAddressOutput).toBe(users.userTextBoxSubmit.curAddress);
        await expect(perAddressOutput).toBe(users.userTextBoxSubmit.perAddress);

    })