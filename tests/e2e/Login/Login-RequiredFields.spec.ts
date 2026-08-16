import { LoginUser } from "@pages/login-page";
import { test } from "@fixtures/page.fixture";
import { User } from "@test-data/users";

test('Required fields on Login page', async ({login}) => {
    let testUser: LoginUser;
    testUser = {
            firstName:  User.TestUser.FirstName,
            lastName: User.TestUser.LastName,
            userName: User.TestUser.UserName,
            password: User.TestUser.Password  
        };
        
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
    