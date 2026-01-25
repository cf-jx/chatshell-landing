const puppeteer = require('puppeteer');
const path = require('path');
const { pathToFileURL } = require('url');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
    const isHeadless = process.env.HEADLESS !== '0';
    const browser = await puppeteer.launch({
        headless: isHeadless ? 'new' : false,
        args: [
            ...(isHeadless ? ['--no-sandbox'] : []),
            '--window-size=1400,900'
        ],
        defaultViewport: isHeadless ? { width: 1400, height: 900 } : null
    });
    const page = await browser.newPage();

    const indexUrl = pathToFileURL(path.resolve(__dirname, 'index.html')).toString();
    await page.goto(indexUrl);
    await sleep(2000);

    const langBtn = await page.$('#lang-toggle');

    console.log('=== 初始语言 (应该是中文) ===');
    console.log('按钮文本:', await page.evaluate(el => el.textContent, langBtn));
    console.log('Hero 标题:', await page.$eval('.hero h1', el => el.textContent));
    console.log('功能1标题:', await page.$eval('.feature-card:nth-child(1) h3', el => el.textContent));
    console.log('界面预览标题:', await page.$eval('#showcase .section-title', el => el.textContent));
    console.log('界面预览1标题:', await page.$eval('.showcase-item:nth-child(1) .showcase-title', el => el.textContent));
    console.log('定价标题:', await page.$eval('#pricing .section-title', el => el.textContent));
    console.log('Standard 年付价格:', await page.$eval('.pricing-card[data-plan="standard"] .price-amount', el => el.textContent));

    // 检查是否有英文残留
    const pageText = await page.evaluate(() => document.body.innerText);
    const hasEnglishInChinese = /[a-zA-Z]{3,}/.test(pageText.replace(/En/g, '').replace(/FAQ/g, '').replace(/Showcase/g, '').replace(/Pricing/g, '').replace(/Features/g, '').replace(/Download/g, '').replace(/ChatGPT/g, '').replace(/ChatShell/g, '').replace(/PDF/g, '').replace(/Markdown/g, '').replace(/DOCX/g, '').replace(/JSON/g, '').replace(/HTML/g, '').replace(/Pro/g, '').replace(/LaTeX/g, ''));
    console.log('中文模式下检测到英文:', hasEnglishInChinese);

    await langBtn.click();
    await sleep(1000);

    console.log('\n=== 切换后语言 (应该是英文) ===');
    console.log('按钮文本:', await page.evaluate(el => el.textContent, langBtn));
    console.log('Hero 标题:', await page.$eval('.hero h1', el => el.textContent));
    console.log('功能1标题:', await page.$eval('.feature-card:nth-child(1) h3', el => el.textContent));
    console.log('Showcase title:', await page.$eval('#showcase .section-title', el => el.textContent));
    console.log('Showcase item 1 title:', await page.$eval('.showcase-item:nth-child(1) .showcase-title', el => el.textContent));
    console.log('Pricing title:', await page.$eval('#pricing .section-title', el => el.textContent));
    console.log('Standard annual price:', await page.$eval('.pricing-card[data-plan="standard"] .price-amount', el => el.textContent));

    // 检查是否有中文残留
    const pageText2 = await page.evaluate(() => document.body.innerText);
    const hasChineseInEnglish = /[\u4e00-\u9fa5]/.test(pageText2);
    console.log('英文模式下检测到中文:', hasChineseInEnglish);

    await sleep(1000);
    await browser.close();
})();
