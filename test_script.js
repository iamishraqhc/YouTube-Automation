var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until,
Key = webdriver.Key;

var chrome = require('selenium-webdriver/chrome');
var options = new chrome.Options();
options.addArguments('--user-data-dir=C:\\Users\\Ishraq Haider\\AppData\\Local\\Google\\Chrome\\User Data\\Default');
var driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();
// var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).forBrowser('chrome').build();
(async function google_search(){
    await driver.get('https://www.youtube.com');
    // await driver.findElement(By.id('identifierId')).sendKeys('entrep.haider');
    // await driver.sleep(1000);
    // await driver.findElement(By.id('identifierNext')).click();
    await driver.findElement(By.xpath('//*[@id="avatar-btn"]')).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//*[@id="items"]/ytd-compact-link-renderer[3]')).click();
    await driver.sleep(5000);
    await driver.quit();
})();
