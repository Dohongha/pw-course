import { test } from "@playwright/test";
test("Product page", async ({ page }) => {
    await test.step("Navigate to Playwright page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click on Product page", async () => {
        await page.locator("//a[contains(text(), 'Product page')]").click();
    });
    await test.step("Add product 1 with 2 times", async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    });
    await test.step("Add product 2 with 3 times", async () => {
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    });
    await test.step("Add product 3 with 1 time", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
})