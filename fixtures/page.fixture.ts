import { test as base } from '@playwright/test';
import { PracticeForm } from '@pages/practice-form';
import { Login } from '@pages/login-page';
import { HomePage } from '@pages/home-page';
import { TextBoxPage } from '@pages/text-box-page';
import { TOC } from '@pages/toc';
import { WebTablePage } from '@pages/web-table-page';
import { apiTest } from './api.fixture';
import { User } from '@test-data/users';

type Pages = {
    login: Login;
    homePage: HomePage;
    textBox: TextBoxPage;
    toc: TOC;
    webTable: WebTablePage;
    practiceForm: PracticeForm;
    };

export const test = apiTest.extend<Pages>({
    
    login: async ({ page }, use) => {
        const loginPage = new Login(page);
        await loginPage.open();
        await loginPage.verifyPageIsLoaded();
        await use(loginPage);
    },

    homePage: async({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.verifyPageIsLoaded();
        await use(homePage);
    },
   
    textBox: async ({ page }, use) => {
        const textBoxPage = new TextBoxPage(page);
        await textBoxPage.open();
        await textBoxPage.verifyPageIsLoaded();
        await use(textBoxPage);
    },
   
    toc: async ({ page }, use) => {
        const tocPage = new TOC(page);
        await tocPage.open();
        await tocPage.verifyPageIsLoaded();
        await use(tocPage);
    },

    webTable: async ({ page }, use) => {
        const webTablePage = new WebTablePage(page);
        await webTablePage.open();
        await webTablePage.verifyPageIsLoaded();
        await use(webTablePage);
    },

    practiceForm: async ({ page }, use) => {
        const practiceFormPage = new PracticeForm(page);
        await practiceFormPage.open();
        await practiceFormPage.verifyPageIsLoaded();
        await use(practiceFormPage);
    },
});

export { expect } from '@playwright/test';