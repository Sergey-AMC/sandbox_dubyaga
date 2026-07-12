import { Locator, expect } from '@playwright/test';

export async function cleanInput(input: Locator) {
    await input.click();
    await input.press(process.platform === 'darwin' ? 'Meta+A' : 'Control+A');
    await input.press('Backspace');
}

export async function verifyPlaceholder(locator: Locator, expectPlaceholder: string) {
    await expect(locator).toHaveAttribute('placeholder', expectPlaceholder);
    
}