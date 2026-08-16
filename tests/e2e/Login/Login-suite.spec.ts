import { LoginUser } from "@pages/login-page";
import { test } from "@fixtures/page.fixture";
import { User } from "@test-data/users";

test.describe ('Login Page suite: 1. Create User, 2. Login, 3. Delete Account', () => {
    let testUser: LoginUser;
    testUser = {
            firstName:  User.TestUser.FirstName,
            lastName: User.TestUser.LastName,
            userName: User.TestUser.UserName,
            password: User.TestUser.Password       
    }

    test.beforeEach(async ({login}) => {
        await login.open();
    })
        
    test('Register to Book Store', async ({login}) => {
        await login.clickNewUser();
        await login.fillRegisterForm(testUser);
        await login.clickRegisterButton();
    })

    test('Login to Book Store', async ({login}) => {
        await login.enterUserCredential(testUser);
        await login.clickLoginButton();
        await login.checkProfilePageUser(testUser);
    })

    test('Delete account from Book Store', async ({login}) => {
        await login.enterUserCredential(testUser);
        await login.clickLoginButton();
        await login.clickDeleteAccount();
        await login.clickConfirmationOkButton();
    })
})