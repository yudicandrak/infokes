import { test, expect } from '@playwright/test';

test('User can successfully checkout items', async ({ page }) => {

    await test.step('Navigate to the login page and fill in credentials', async () => {
        await page.goto('https://www.saucedemo.com/');
        // Verify the page title is visible and contains the text "Swag Labs"
        await page.getByText('Swag Labs').waitFor({ state: 'visible' });
        expect(page.getByText('Swag Labs')).toBeVisible();

        // verify the username and password fields are visible
        await page.locator('[data-test="username"]').fill('standard_user');
        expect(page.locator('[data-test="username"]')).toHaveValue('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');

        await page.locator('[data-test="login-button"]').click();

        // verify that the user is redirected to the products page and the title is correct
        await page.locator('[data-test="title"]').waitFor({ state: 'visible' });
        expect(page.locator('[data-test="title"]')).toHaveText('Products');
    })
})