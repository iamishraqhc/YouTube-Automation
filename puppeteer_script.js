const puppeteer = require('puppeteer-core');
const identity = require('./user.json');

(async () => {
    const browser = await puppeteer.launch({
        'headless': false,
        'executablePath': 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    });
    const page = await browser.newPage();
    await page.goto("https://studio.youtube.com");
    await page.waitFor(2000);
    // await page.type('.gLFyf.gsfi', 'puppeteer vs selenium');
    // await page.waitFor(2000);
    // await page.click('input.gNO89b');
    await page.type('#identifierId', identity.identity.user);
    await page.waitFor(2000);
    await page.click('#identifierNext');
    await page.waitFor(5000);
    await browser.close();
})();

/* 
    There are issues to bypass google login with puppeteer so it will be kept as it is for a while. 
    I will be writing another script using selenium and let's see how that goes.
    If I find a solution with puppeteer, I will update this script.
    For now, its marked as incomplete.
*/