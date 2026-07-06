import { Page, Locator } from '@playwright/test';

export class WebTable {
  constructor(private locator: Locator) {}  
  
  // Set text in the WebTable
  public async setValue(text: string): Promise<void> {
    await this.locator.fill(text);
  }
  
    // Get text from the WebTable
  public async getValue(): Promise<string> {
    return (await this.locator.innerText());
  }
  
}