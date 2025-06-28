import { test } from "@playwright/test";
test("Product page", async ({ page }) => {
    await test.step("Navigate to Playwright page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click on Todo page", async () => {
        await page.locator("//a[contains(text(), 'Todo page')]").click();
    });
    for (let i = 1; i <= 100; i++) {
        await test.step("Enter a new task", async () => {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
        });
        await test.step("Click Add Task button", async () => {
            await page.locator("//button[@id='add-task']").click();
        });
    }


    for (let i = 99; i >= 0; i--) {
        // Todo lẻ là vị trí 1, 3, 5,... (index bắt đầu từ 0 nên kiểm tra (i+1)%2 === 1)
        if ((i + 1) % 2 === 1) {
            page.once("dialog", async (dialog) => {
                await dialog.accept();
            });
            await await page.locator("//button[contains(text(), 'Delete')]").nth(i).click();
        }
    }
});