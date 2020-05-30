var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until,
Key = webdriver.Key;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).forBrowser('chrome').build();
(async function google_search(){
    await driver.get('https://www.google.com/');
    await driver.findElement(By.name('q')).sendKeys('javaScript');
    await driver.sleep(1000);
    await driver.findElement(By.name('btnK')).click();
    await driver.sleep(5000);
    await driver.quit();
})();
