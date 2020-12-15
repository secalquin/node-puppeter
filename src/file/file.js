const puppeteer = require('puppeteer');
const path = require('path');

(async () => {

  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage();
  await page.goto('https://www.sii.cl/valores_y_fechas/uf/uf2020.htm');
  await page.click('#my-wrapper > div.web-sii.cuerpo > div > div > div > div.col-sm-9.contenido > div.filtro > div > div.col-sm-4 > a');
  await page._client.send('Page.setDownloadBehavior', {
    behavior: 'allow', downloadPath: path.resolve(__dirname,'files')});
 
  
  console.log("Se iniciará el cierre de la pagina...");
  await setTimeout(() => {
    console.log('Pagina cerrada');
    browser.close();
  },5000);


})();