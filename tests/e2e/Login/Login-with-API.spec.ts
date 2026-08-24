import { test } from "@fixtures/page.fixture";
import { createTestUser } from '@utils/userFactory';

test.describe.configure({ mode: 'serial' });
test.describe('Create user via API -> Login -> Delete user', () => {
    const user = createTestUser();
    let createdUser: { userID: string };
    let token: string;
   
    test('Create user via API', async ({ userApi }) => {
        createdUser = await userApi.createUser(user);
        token = await userApi.generateToken(user);
    });

    test('Login', async ({ login }) => {
        await login.open();
        await login.enterUserCredential(user);
        await login.clickLoginButton();
        await login.checkProfilePageUser(user);
    });

    test('Delete user', async ({ login }) => {
        await login.enterUserCredential(user);
        await login.clickLoginButton();
        await login.clickDeleteAccount();
        await login.clickConfirmationOkButton();
    });
});