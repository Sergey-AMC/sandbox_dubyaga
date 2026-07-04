import { Page } from '@playwright/test';


export class SelectElement {
  constructor(private page: Page) {}

  // Select Text Box on the Elements page
  async textBox() {
        await this.page.getByRole('link', { name: 'Text Box' }).click();
  }

  // Select Check Box on the Elements page
  async checkBox() {
        await this.page.getByRole('link', { name: 'Check Box' }).click();
  }

  // Select Radio Button on the Elements page
  async radioButton() {
        await this.page.getByRole('link', { name: 'Radio Button'}).click();
  }

  // Select Web Tables on the Elements page
  async webTables() {
        await this.page.getByRole('link', { name: 'Web Tables' }).click();
  }

  // Select Buttons on the Elements page
  async buttons() {
        await this.page.getByRole('link', { name: 'Buttons' }).click();
  }

  // Select Links on the Elements page
  async links() {
        await this.page.getByRole('link', { name: 'Links' }).click();
  }

  // Select Broken Links on the Elements page
  async brokenLinks() {
        await this.page.getByRole('link', { name: 'Broken Links' }).click();
  }

  // Select Upload and Download on the Elements page
  async uploadDownload() {
        await this.page.getByRole('link', { name: 'Upload and Download' }).click();
  }

  // Select Dynamic Properties on the Elements page
  async dynamicProperties() {
        await this.page.getByRole('link', { name: 'Dynamic Properties' }).click();
  }
}