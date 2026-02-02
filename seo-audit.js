const fs = require('node:fs');
const path = require('node:path');

const SITE_BASE = 'https://cf-jx.github.io/chatshell-landing/';
const CWS_URL =
    'https://chromewebstore.google.com/detail/%E6%8B%BE%E8%B4%9D-chatgpt-%E5%AF%BC%E5%87%BA/cgbbhkffpjedcannkmgldlfkolppodnh';

const PAGES = [
    { name: 'index', file: 'index.html', canonical: SITE_BASE },
    { name: 'privacy', file: 'privacy.html', canonical: SITE_BASE + 'privacy.html' },
    { name: 'terms', file: 'terms.html', canonical: SITE_BASE + 'terms.html' }
];

function assert(condition, message, errors) {
    if (!condition) errors.push(message);
}

function readFileUtf8(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getFirstMatch(text, regex) {
    const match = text.match(regex);
    return match ? match[1] : '';
}

function extractMetaContentByName(html, name) {
    const r = new RegExp(
        `<meta[^>]*\\bname\\s*=\\s*['"]${escapeRegex(name)}['"][^>]*\\bcontent\\s*=\\s*['"]([^'"]*)['"][^>]*>`,
        'i'
    );
    return getFirstMatch(html, r);
}

function extractMetaContentByProperty(html, prop) {
    const r = new RegExp(
        `<meta[^>]*\\bproperty\\s*=\\s*['"]${escapeRegex(prop)}['"][^>]*\\bcontent\\s*=\\s*['"]([^'"]*)['"][^>]*>`,
        'i'
    );
    return getFirstMatch(html, r);
}

function extractCanonicalHref(html) {
    const r = /<link[^>]*\brel\s*=\s*['"]canonical['"][^>]*\bhref\s*=\s*['"]([^'"]+)['"][^>]*>/i;
    return getFirstMatch(html, r);
}

function extractTitle(html) {
    const r = /<title[^>]*>([^<]*)<\/title>/i;
    return getFirstMatch(html, r).trim();
}

function extractJsonLdBlocks(html) {
    const blocks = [];
    const r = /<script[^>]*type\s*=\s*['"]application\/ld\+json['"][^>]*>([\s\S]*?)<\/script>/gi;
    let match;
    while ((match = r.exec(html)) !== null) {
        const raw = (match[1] || '').trim();
        if (raw) blocks.push(raw);
    }
    return blocks;
}

function collectJsonLdNodes(node, out) {
    if (!node) return;
    if (Array.isArray(node)) {
        for (const item of node) collectJsonLdNodes(item, out);
        return;
    }
    if (typeof node !== 'object') return;
    if (Array.isArray(node['@graph'])) {
        for (const item of node['@graph']) collectJsonLdNodes(item, out);
        return;
    }
    out.push(node);
}

function validatePage(page, html) {
    const errors = [];
    const warnings = [];

    const title = extractTitle(html);
    const description = extractMetaContentByName(html, 'description').trim();
    const robots = extractMetaContentByName(html, 'robots').trim();
    const canonical = extractCanonicalHref(html).trim();

    assert(title.length > 0, 'missing <title>', errors);
    assert(description.length > 0, 'missing meta description', errors);
    assert(robots.length > 0, 'missing meta robots', errors);
    assert(canonical === page.canonical, `canonical mismatch: expected ${page.canonical} got ${canonical}`, errors);

    const og = {
        type: extractMetaContentByProperty(html, 'og:type').trim(),
        title: extractMetaContentByProperty(html, 'og:title').trim(),
        description: extractMetaContentByProperty(html, 'og:description').trim(),
        image: extractMetaContentByProperty(html, 'og:image').trim(),
        url: extractMetaContentByProperty(html, 'og:url').trim()
    };
    for (const key of Object.keys(og)) {
        assert(og[key].length > 0, `missing og:${key}`, errors);
    }
    assert(og.url === page.canonical, `og:url mismatch: expected ${page.canonical} got ${og.url}`, errors);
    assert(/^https:\/\//i.test(og.image), `og:image must be absolute https URL: ${og.image}`, errors);

    const twitter = {
        card: extractMetaContentByName(html, 'twitter:card').trim(),
        title: extractMetaContentByName(html, 'twitter:title').trim(),
        description: extractMetaContentByName(html, 'twitter:description').trim(),
        image: extractMetaContentByName(html, 'twitter:image').trim()
    };
    for (const key of Object.keys(twitter)) {
        assert(twitter[key].length > 0, `missing twitter:${key}`, errors);
    }
    assert(/^https:\/\//i.test(twitter.image), `twitter:image must be absolute https URL: ${twitter.image}`, errors);

    if (description.length < 50 || description.length > 200) {
        warnings.push(`meta description length looks off (${description.length})`);
    }

    if (page.name === 'index') {
        const blocks = extractJsonLdBlocks(html);
        assert(blocks.length > 0, 'missing JSON-LD', errors);
        const nodes = [];
        for (let i = 0; i < blocks.length; i += 1) {
            try {
                const parsed = JSON.parse(blocks[i]);
                collectJsonLdNodes(parsed, nodes);
            } catch (err) {
                errors.push(`invalid JSON-LD[${i}]: ${String(err && err.message ? err.message : err)}`);
            }
        }

        const software = nodes.find((n) => n && n['@type'] === 'SoftwareApplication' && n.name === 'ChatShell');
        assert(Boolean(software), 'missing SoftwareApplication JSON-LD', errors);
        if (software) {
            assert(
                software.downloadUrl === CWS_URL,
                `SoftwareApplication.downloadUrl mismatch: expected ${CWS_URL} got ${software.downloadUrl}`,
                errors
            );
        }
    }

    return { errors, warnings, title, canonical };
}

function validateRobotsAndSitemap(rootDir) {
    const errors = [];
    const robotsPath = path.join(rootDir, 'robots.txt');
    const sitemapPath = path.join(rootDir, 'sitemap.xml');

    assert(fs.existsSync(robotsPath), 'missing robots.txt', errors);
    assert(fs.existsSync(sitemapPath), 'missing sitemap.xml', errors);

    if (!fs.existsSync(robotsPath) || !fs.existsSync(sitemapPath)) return errors;

    const robots = readFileUtf8(robotsPath);
    const sitemap = readFileUtf8(sitemapPath);

    assert(robots.includes(`Sitemap: ${SITE_BASE}sitemap.xml`), 'robots.txt missing sitemap line', errors);
    assert(sitemap.includes(`<loc>${SITE_BASE}</loc>`), 'sitemap.xml missing homepage loc', errors);
    assert(sitemap.includes(`<loc>${SITE_BASE}privacy.html</loc>`), 'sitemap.xml missing privacy loc', errors);
    assert(sitemap.includes(`<loc>${SITE_BASE}terms.html</loc>`), 'sitemap.xml missing terms loc', errors);

    return errors;
}

function main() {
    const rootDir = __dirname;
    let errorsTotal = 0;

    for (const page of PAGES) {
        const filePath = path.join(rootDir, page.file);
        const html = readFileUtf8(filePath);
        const { errors, warnings, title, canonical } = validatePage(page, html);

        console.log(`\n=== ${page.name} ===`);
        console.log('title:', title);
        console.log('canonical:', canonical);

        if (warnings.length > 0) {
            console.log('warnings:');
            for (const w of warnings) console.log('- ' + w);
        }

        if (errors.length > 0) {
            console.log('errors:');
            for (const e of errors) console.log('- ' + e);
            errorsTotal += errors.length;
        } else {
            console.log('ok');
        }
    }

    const fileErrors = validateRobotsAndSitemap(rootDir);
    if (fileErrors.length > 0) {
        console.log('\n=== files ===');
        console.log('errors:');
        for (const e of fileErrors) console.log('- ' + e);
        errorsTotal += fileErrors.length;
    }

    if (errorsTotal > 0) process.exitCode = 1;
}

main();
