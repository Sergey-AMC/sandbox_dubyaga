import { Login, LoginUser } from "@pages/login-page";
import { Page, test } from "@playwright/test";
import { User } from "@test-data/users";
import { verifyPlaceholder } from "@helpers/inputs.helper";

test('Login Page', async ({page}) => {
    const login = new Login(page);
    let testUser: LoginUser;
    testUser = {
            firstName:  User.TestUser.FirstName,
            lastName: User.TestUser.LastName,
            userName: User.TestUser.UserName,
            password: User.TestUser.Password       
    }
    
    await test.step('Placeholder values on Login page', async () => {
        await login.open();
        await verifyPlaceholder(login.loginUserName,User.Placeholder.UserName);
        await verifyPlaceholder(login.loginPassword,User.Placeholder.Password);
    })
    
    await test.step('Required fields on Login page', async () => {
        await login.open();
        await login.clickLoginButton()
        await login.chechIsUserNameBorderRed();
        await login.chechIsPasswordBorderRed();
        await login.enterUserName(testUser);
        await login.clickLoginButton();
        await login.chechIsPasswordBorderRed();
        await login.cleanUserName();
        await login.enterPassword(testUser);
        await login.clickLoginButton();
        await login.chechIsUserNameBorderRed();
    })
    
    await test.step('Register to Book Store', async () => {
        await login.open();
        await login.clickNewUser();
        await login.fillRegisterForm(testUser);
        await login.clickRegisterButton();
    })

    await test.step('Login to Book Store', async () => {
        await login.open();
        await login.enterUserCredential(testUser);
        await login.clickLoginButton();
        await login.checkProfilePageUser(testUser);
        await login.clickLogOutButton();
    })

    await test.step('Delete account from Book Store', async () => {
        await login.open();
        await login.enterUserCredential(testUser);
        await login.clickLoginButton();
        await login.clickDeleteAccount();
        await login.clickConfirmationOkButton();
    })
})