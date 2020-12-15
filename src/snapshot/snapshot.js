const puppeteer = require('puppeteer');
const moment = require('moment');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({
    path: path.join(__dirname,`/images/${moment().format('DDMMYYYY-hhmmss')}.jpg`)
  });

  await browser.close();
})();