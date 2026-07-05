import { Page, Locator } from '@playwright/test';
import { TextBox } from '@elements/TextBox';

export class TextBoxPage {

    private userName: TextBox;
    private email: TextBox;
    private currentAddress: TextBox
    private permanentAddress: TextBox;
    private userNameResult: TextBox;
    private emailResult: TextBox;
    private currentAddressResult: TextBox;  
    private permanentAddressResult: TextBox;
    private buttonSubmit: Locator;
    
    constructor(private page: Page) {
        this.userName = new TextBox(this.page.locator('#userName'));
        this.email = new TextBox(this.page.locator('#userEmail'));
        this.currentAddress = new TextBox(this.page.locator('#currentAddress'));
        this.permanentAddress = new TextBox(this.page.locator('#permanentAddress'));
        this.buttonSubmit = this.page.locator('#submit');
        this.userNameResult = new TextBox(this.page.locator('#name'));
        this.emailResult = new TextBox(this.page.locator('#email'));
        this.currentAddressResult = new TextBox(this.page.locator('#currentAddress').nth(1));
        this.permanentAddressResult = new TextBox(this.page.locator('#permanentAddress').nth(1));
    }
  
  //Set values  
  public async setUserName(name: string) {
    await this.userName.setText(name);}

  public async setEmail(email: string) {
    await this.email.setText(email); }

  public async setCurrentAddress(address: string) {
    await this.currentAddress.setText(address);}

  public async setPermanentAddress(address: string) {
    await this.permanentAddress.setText(address); }
  
  //Get values
  public async getUserName(): Promise<string> {
    return await this.userName.getText();}

  public async getEmail(): Promise<string> {
    return await this.email.getText();}
  
  public async getCurrentAddress(): Promise<string> {
    return await this.currentAddress.getText();}

  public async getPermanentAddress(): Promise<string> {
    return await this.permanentAddress.getText();}

  //Get value from Output field  
  public async getUserNameOutput(): Promise<string> {
    return await this.userNameResult.getResult();}

  public async getEmailOutput(): Promise<string> {
    return await this.emailResult.getResult();}

  public async getCurrentAddressOutput(): Promise<string> {
    return await this.currentAddressResult.getResult();}  

  public async getPermanentAddressOutput(): Promise<string> {
    return await this.permanentAddressResult.getResult();}
  
  //Get placeholder values
  public async getUserNamePlaceholder(): Promise<string> {
    return await this.userName.getPlaceholder();}

  public async getEmailPlaceholder(): Promise<string> {
    return await this.email.getPlaceholder();}   

  public async getCurrentAddressPlaceholder(): Promise<string> {
    return await this.currentAddress.getPlaceholder();}

  public async getPermanentAddressPlaceholder(): Promise<string> {
    return await this.permanentAddress.getPlaceholder();}

  // Click Submit button
    public async clickSubmit(): Promise<void> {
    await this.buttonSubmit.click();}

  // Clear values
  public async clearUserName(): Promise<void> {
    await this.userName.clear();}

  public async clearEmail(): Promise<void> {
    await this.email.clear();}   
  
  public async clearCurrentAddress(): Promise<void> {
    await this.currentAddress.clear();}

  public async clearPermanentAddress(): Promise<void> {
    await this.permanentAddress.clear();}

}    