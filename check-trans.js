const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

// Get all data-i18n keys from HTML
const dataI18n = html.match(/data-i18n="([^"]+)"/g) || [];
const uniqueKeys = [...new Set(dataI18n.map(k => k.match(/"([^"]+)"/)[1]))];
console.log('HTML 中的 data-i18n keys:', uniqueKeys.length + ' 个');
console.log('Keys:', uniqueKeys);

// Check Chinese translations
const zhMatch = js.match(/'zh-CN': \{([\s\S]*?)\}\s*,\s*'en'/);
if (zhMatch) {
    const zhText = stripComments(zhMatch[1]);
    const missingKeys = uniqueKeys.filter(k => !zhText.includes(k + ':'));
    if (missingKeys.length > 0) {
        console.log('\n!!! 缺失的中文翻译 keys:', missingKeys);
    } else {
        console.log('\n✓ 所有 keys 都有中文翻译');
    }
}

// Check English translations
const enMatch = js.match(/'en': \{([\s\S]*?)\}\s*\}\s*;/);
if (enMatch) {
    const enText = stripComments(enMatch[1]);
    const missingKeys = uniqueKeys.filter(k => !enText.includes(k + ':'));
    if (missingKeys.length > 0) {
        console.log('\n!!! 缺失的英文翻译 keys:', missingKeys);
    } else {
        console.log('\n✓ 所有 keys 都有英文翻译');
    }
}

// Check for Chinese characters in English translations
const enSection = js.match(/'en': \{([\s\S]*?)\}\s*\}\s*;/);
if (enSection) {
    const enText = stripComments(enSection[1]);
    const hasChinese = /[\u4e00-\u9fa5]/.test(enText.replace(/key.*:/g, ''));
    if (hasChinese) {
        const chineseChars = enText.match(/[\u4e00-\u9fa5]+/g);
        console.log('\n!!! 英文翻译中发现中文字符:', chineseChars);
    } else {
        console.log('\n✓ 英文翻译中没有发现中文字符');
    }
}

// Check for long English words in Chinese translations (except tech terms)
const zhSection = js.match(/'zh-CN': \{([\s\S]*?)\}\s*,\s*'en'/);
if (zhSection) {
    const zhText = stripComments(zhSection[1]);
    // Remove keys and check for long English sequences
    const valuesOnly = zhText.replace(/^\s*\w+:\s*/gm, '').replace(/'/g, '');
    const longEnglish = valuesOnly.match(/[a-zA-Z]{4,}/g) || [];
    const techTerms = [
        'ChatGPT',
        'ChatShell',
        'Markdown',
        'PDF',
        'DOCX',
        'HTML',
        'JSON',
        'LaTeX',
        'Pro',
        'Standard',
        'Free',
        'Chrome',
        'Edge',
        'Brave',
        'Arc',
        'Chromium',
        'Sync',
        'License',
        'Key',
        'Cloudflare',
        'Workers',
        'OpenAI',
        'GitHub',
        'Issue',
        'HTTPS',
        'Creem'
    ];
    const suspicious = longEnglish.filter(w => !techTerms.some(t => w.includes(t)));
    if (suspicious.length > 0) {
        console.log('\n!!! 中文翻译中发现可疑英文:', [...new Set(suspicious)]);
    } else {
        console.log('\n✓ 中文翻译中没有发现非技术术语的英文');
    }
}
