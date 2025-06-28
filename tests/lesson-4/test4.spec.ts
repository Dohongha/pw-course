import { test } from "@playwright/test";
test("Product page", async ({ page }) => {
    await test.step("Navigate to Playwright page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })
    await test.step("Click on Personal notes", async () => {
        await page.locator("//a[contains(text(), 'Personal notes')]").click();

    })

        await test.step("Navigate to VNexpress page", async () => {
            await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe");
        })
        await test.step("Enter a note content", async () => {
            await page.locator("//input[@id='note-cotent']").fill();
        })

});