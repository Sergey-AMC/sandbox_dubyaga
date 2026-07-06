import { Page, Locator } from '@playwright/test';

export class TextBox {
  constructor(private locator: Locator) {}  
  
  // Set text in the TextBox
  public async setText(text: string): Promise<void> {
    await this.locator.fill(text);
  }
  
  // Clear the text from the TextBox
  public async clear(): Promise<void> {
    await this.locator.clear();
  }

  // Get text from the TextBox
  public async getText(): Promise<string> {
    return (await this.locator.inputValue()) ?? '';
  }

  // Get text from the TextBox
  public async getResult(): Promise<string> {
    return (await this.locator.innerText()) ?? '';
  }
  
  // Get the placeholder value of the TextBox 
  public async getPlaceholder(): Promise<string> {
    return (await this.locator.getAttribute('placeholder')) ?? '';
  }
    
}
