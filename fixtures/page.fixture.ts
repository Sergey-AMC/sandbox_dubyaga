import { test as base } from '@playwright/test';
import { PracticeForm } from '@pages/practice-form';
import { Login, LoginUser } from '@pages/login-page';
import { HomePage } from '@pages/home-page';
import { TextBoxPage } from '@pages/text-box-page';
import { TOC } from '@pages/toc';
import { WebTablePage } from '@pages/web-table-page';
import { User } from '@test-data/users';

type Pages = {
    login: Login;
    homePage: HomePage;
    textBox: TextBoxPage;
    toc: TOC;
    webTable: WebTablePage;
    practiceForm: PracticeForm;
    };

export const test = base.extend<Pages>({
    login: async ({ page }, use) => {
        await use(new Login(page));
    },

    homePage: async({ page }, use) => {
        await use(new HomePage(page));    
    },

    textBox: async ({ page }, use) => {
        await use(new TextBoxPage(page));
    },

    toc: async ({ page }, use) => {
        await use(new TOC(page));
    },
    
    webTable: async ({ page }, use) => {
        await use(new WebTablePage(page));
    },

    practiceForm: async ({ page }, use) => {
        await use(new PracticeForm(page));
    },
});

export { expect } from '@playwright/test';