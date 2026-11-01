const puppeteer = require('puppeteer-core');
const path = require('path');

async function capture() {
  const artifactDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\7df1e92c-8629-48b7-a818-14a974b2139f';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--use-gl=angle', '--use-angle=swiftshader']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 1.5 });

  console.log('Navigating to http://localhost:3001 ...');
  await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));

  console.log('Capturing hero.png...');
  await page.screenshot({ path: path.join(artifactDir, 'hero.png') });

  console.log('Capturing book.png...');
  const playbookElem = await page.$('#playbook');
  if (playbookElem) {
    await playbookElem.scrollIntoView();
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(artifactDir, 'book.png') });
  }

  console.log('Capturing services.png...');
  const servicesElem = await page.$('#services');
  if (servicesElem) {
    await servicesElem.scrollIntoView();
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(artifactDir, 'services.png') });
  }

  console.log('Capturing pricing.png...');
  const pricingElem = await page.$('#pricing');
  if (pricingElem) {
    await pricingElem.scrollIntoView();
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(artifactDir, 'pricing.png') });
  }

  console.log('Capturing contact.png...');
  const contactElem = await page.$('#contact');
  if (contactElem) {
    await contactElem.scrollIntoView();
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(artifactDir, 'contact.png') });
  }

  await browser.close();
  console.log('All updated screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
