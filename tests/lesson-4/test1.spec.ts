import { test } from "@playwright/test";

test("Register page", async ({ page }) => {
    await test.step("Navigate to Playwright page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click on Register page", async () => {
        await page.locator("//a[contains(text(), 'Register Page')]").click();
    });
    await test.step("Input username", async () => {
        await page.locator("//input[@id='username']").fill("Ha Do");
    });
    await test.step("Input email", async () => {
        await page.locator("//input[@id='email']").fill("hado@gmail.com");
    });
    await test.step("Select gender", async () => {
        await page.locator("//input[@id='female']").check();
    });
    await test.step("Select hobbies", async () => {
        await page.locator("//input[@id='traveling']").setChecked(true);
        await page.locator("//input[@id='cooking']").setChecked(true);
        await page.locator("//input[@id='reading']").check();
    });
    await test.step("Select interests", async () => {
        await page.locator("//select[@id='interests']").selectOption("Art");
    });
    await test.step("Select country", async () => {
        await page.locator("//select[@id='country']").selectOption("Canada");
    });
    await test.step("Input data of birth", async () => {
        await page.locator("//input[@id='dob']").fill("1999-06-17");
    });
    await test.step("Add file", async () => {
        await page.locator("//input[@id='profile']").setInputFiles("tests/data-test/file-1.txt");
    });
    await test.step("Input biography", async () => {
        await page.locator("//textarea[@id='bio']").pressSequentially("My name is Ha. I'm 18 years old. I'm a tester.");
    });
    await test.step("Rate us", async () => {
        const boxRate = await page.locator("//input[@id='rating']").boundingBox();
        let xRateUs, yRateUs;
        if (boxRate) {
            xRateUs = boxRate.width / 2;
            yRateUs = boxRate.height / 2;
        }
        await page.locator("//input[@id='rating']").click({
            position: {
                x: xRateUs,
                y: yRateUs
            }
        });
    });
    await test.step("Select favorite color", async () => {
        await page.locator("//input[@id='favcolor']").fill("#ead7d7");
    });
    await test.step("Click subscribe", async () => {
        await page.locator("//input[@id='newsletter']").check();
    });
    await test.step("Enable feature", async () => {
        await page.locator("//span[@class='slider round']").setChecked(true);
    });

    await test.step("Star rating", async () => {
        // xac dinh toa do, kich thuoc cua starRating
        const boxStarRating = await page.locator("//div[@id='starRating']").boundingBox();

        // tinh toan toa do ma minh muon thuc hien hanh dong
        let xCoordinate, yCoordinate;
        if (boxStarRating) { // dieu kien la box khong null
            xCoordinate = boxStarRating.width / 3;
            yCoordinate = boxStarRating.height / 3;
        }

        await page.locator("//div[@id='starRating']").click({
            position: {
                x: xCoordinate,
                y: yCoordinate
            }
        });
    });
        await test.step("", async () => {
        await page.locator("//button[@type='submit']").click();
    });

})
