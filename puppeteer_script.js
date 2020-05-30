const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({
        'headless': false,
        'executablePath': 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    });
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
    await page.waitFor(2000);
    await page.type('.gLFyf.gsfi', 'puppeteer vs selenium');
    await page.waitFor(2000);
    await page.click('input.gNO89b');
    await page.waitFor(5000);
    await browser.close();
})();
