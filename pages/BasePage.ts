import { Locator, Page, expect } from '@playwright/test';
export class BasePage {

constructor(protected page: Page) {}
    
    async click(locator: Locator) {
        await locator.click();
    }
    
    async fill(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async waitForVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }
}