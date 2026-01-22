// ========================================
// ChatShell Landing Page - Elegant Scripts
// Clean, minimal interactions
// ========================================

const translations = {
    'zh-CN': {
        nav_features: '功能',
        nav_pricing: '定价',
        nav_download: '下载',
        nav_privacy: '隐私政策',
        nav_terms: '服务条款',
        hero_title: '优雅地保存每一段对�?,
        hero_subtitle: '本地运行，隐私优先�?br>�?ChatGPT 对话导出�?PDF、Markdown、DOCX、HTML、JSON 等格式�?,
        btn_get_started: '开始使�?,
        feature_1_title: '多格式导�?,
        feature_1_desc: '支持 PDF、Markdown、DOCX、HTML、JSON 等格式，导出更干净、更可读�?,
        feature_2_title: '本地运行',
        feature_2_desc: '无需后台服务，主要逻辑在浏览器本地完成。自动适配深色/浅色模式�?,
        feature_3_title: '????',
        feature_3_desc: '????????????????License ????????????????? Creem?',
        feature_4_title: '公式渲染',
        feature_4_desc: '完美支持 LaTeX 数学公式，导出后仍保持清晰可读�?,
        feature_5_title: '批量导出',
        feature_5_desc: '一键导出多个对话至 HTML/MD/DOCX/JSON（Pro）�?,
        feature_6_title: '贴边浮动入口',
        feature_6_desc: '可自由拖拽，贴边后自动隐藏一半，不挡阅读视线�?,
        showcase_title: '界面预览',
        showcase_desc: '实际产品界面展示',
        showcase_shot_1: '截图占位：浮动按钮（可拖�?/ 贴边自动隐藏�?,
        showcase_shot_2: '截图占位：导出面板（格式 / 选中导出 / 偏好设置�?,
        showcase_shot_3: '截图占位：导出结果（PDF / Markdown / DOCX�?,
        showcase_1_title: '浮动入口',
        showcase_1_desc: '随时一键呼出导出面板，减少打扰�?,
        showcase_2_title: '导出面板',
        showcase_2_desc: '选择格式与偏好，导出更干净、更可读�?,
        showcase_3_title: '导出结果',
        showcase_3_desc: '适合归档、分享与二次编辑�?,
        features_title: '为什么选择 ChatShell',
        pricing_title: '选择适合你的版本',
        pricing_free: '免费�?,
        pricing_standard: '标准�?,
        pricing_pro: '专业�?,
        pricing_once: '每月',
        pricing_popular: '推荐',
        pricing_free_price: '¥0',
        pricing_std_price: '¥12',
        pricing_pro_price: '¥25',
        pricing_std_year: '年付 ¥108（省 ¥36�?,
        pricing_pro_year: '年付 ¥225（省 ¥75�?,
        pricing_free_1: 'PDF 导出 3�?�?,
        pricing_free_2: '其他格式 5�?�?,
        pricing_free_3: '带水�?,
        pricing_free_limit: 'PDF 3�?月，其他 5�?�?,
        pricing_free_watermark: '�?带水�?,
        pricing_free_nobatch: '�?批量导出 & 团队空间',
        pricing_std_1: '�?无限导出 · 无水�?,
        pricing_std_2: '�?时间�?& 移除分隔�?,
        pricing_std_3: '�?所有格�?,
        pricing_std_nobatch: '�?批量导出 & 团队空间',
        pricing_pro_1: '�?标准版全部功�?,
        pricing_pro_2: '�?批量导出 & 团队空间',
        pricing_pro_3: '�?定期报告提醒备份（即将上线）',
        pricing_upgrade_title: '已有标准版？升级专业�?,
        pricing_upgrade_desc: '订阅专业版解锁批量导出功�?,
        pricing_upgrade_btn: '升级到专业版',
        pricing_buy: '立即订阅',
        pricing_free_btn: '免费下载',
        download_title: '开始使�?,
        download_desc: '�?GitHub 获取最新版本，按说明安装。Chrome Web Store 即将上架�?,
        download_meta: '当前版本：v1.0.0.1',
        download_action: '下载最新版�?,
        // Legal pages
        privacy_title: '隐私政策',
        privacy_date: '最后更新：2026�?�?2�?,
        privacy_h1: '1. ??',
        privacy_p1: 'ChatShell 是本地优先的 ChatGPT 对话导出工具。我们不会收集、出售或分享对话内容到开发者服务器�?,
        privacy_h2: '2. ???????',
        privacy_p2: '我们仅在用户主动导出时访问必要数据：',
        privacy_li1: '读取当前页面的对话内容，用于生成导出文件',
        privacy_li2: '捕获访问令牌用于调用 ChatGPT 接口导出与下载附�?,
        privacy_li3: '访问令牌仅在内存中短暂保存，不会持久�?,
        privacy_h3: '3. ????',
        privacy_p3: '我们会在浏览器中保存必要设置�?,
        privacy_li4: '语言与偏好设置保存在 chrome.storage.sync',
        privacy_li5: 'License Key 与授权状态保存在 chrome.storage.sync',
        privacy_li6: '使用次数保存�?chrome.storage.local',
        privacy_p3b: '导出的文件仅保存在本地设备，我们不会保存或上传�?,
        privacy_h4: '4. ?????',
        privacy_p4: '激�?License 时会发�?License Key 与本地实例标识到 Cloudflare Workers，并转发�?Creem 进行验证，不会上传对话内容�?,
        privacy_h5: '5. ???????',
        privacy_p5: '网络请求仅包�?chatgpt.com / chat.openai.com / *.oaiusercontent.com 以及 License 验证服务，所有请求均通过 HTTPS 发送�?,
        privacy_h6: '6. Limited Use',
        privacy_p6: '我们遵守 Chrome Web Store User Data Policy，包�?Limited Use 要求�?,
        privacy_h7: '7. ????',
        privacy_p7: '联系邮箱�?,
        terms_title: '服务条款',
        terms_date: '最后更新：2026�?�?2�?,
        terms_h1: '1. 服务概述',
        terms_p1: 'ChatShell ????? ChatGPT ????????????????????????',
        terms_h2: '2. 使用许可',
        terms_li1: '??????????????',
        terms_li2: '????????????????????',
        terms_h3: '3. 用户责任',
        terms_p3: '您同意：',
        terms_li3: '仅将本扩展用于合法目�?,
        terms_li4: '不分享或转售您的 License Key',
        terms_li5: '不尝试绕过付费功能限�?,
        terms_li6: '遵守 ChatGPT 的使用条�?,
        terms_h4: '4. 免责声明',
        terms_li7: '本扩展按“现状”提供，不提供任何明示或暗示的保�?,
        terms_li8: '我们不对导出内容的准确性或完整性负�?,
        terms_li9: '我们不对因使用本扩展造成的任何损失负�?,
        terms_li10: '本扩展与 OpenAI �?ChatGPT 无关�?,
        terms_h5: '5. 退款政�?,
        terms_p5: 'License 未激活可退款；一旦激活即不支持退款。订阅可随时在支付平台取消，当前周期仍可用。若支付平台或当地法律有更高要求，以其为准�?,
        terms_h6: '6. 条款变更',
        terms_p6: '??????????????????????',
        terms_h7: '7. 联系方式',
        terms_p7: '开发者：SCF，联系邮箱：',
        lang_btn: 'En',

        // FAQ & Feedback
        faq_title: '常见问题',
        faq_1_q: '数据存储在哪里？',
        faq_1_a: '所有对话数据仅保存在您的本地浏览器中。我们无法访问、查看或存储您的任何数据�?,
        faq_2_q: '如何激活付费版本？',
        faq_2_a: '订阅后您将收到一�?License Key。在插件的“账户”页面输入该 Key 即可激活�?,
        faq_3_q: '支持哪些浏览器？',
        faq_3_a: '支持所有基�?Chromium 内核的浏览器，如 Chrome, Edge, Brave, Arc 等�?,
        faq_4_q: '支持哪些导出格式�?,
        faq_4_a: '单对话导出支�?PDF、Markdown、DOCX、JSON；批量导出支�?HTML、Markdown、DOCX、JSON�?,
        faq_5_q: '订阅可以在多台设备上使用吗？',
        faq_5_a: '可以。License Key 会通过浏览器同步，您可以在多台设备上使用同一个订阅�?,

        feedback_title: '问题反馈',
        feedback_desc: '遇到问题或有功能建议？欢迎随时联系我们。我们会认真阅读每一条反馈�?,
        feedback_email_label: '发送邮件至�?,
        feedback_action_email: '发送邮�?,
        feedback_action_issue: '提交 GitHub Issue'
    },
    'en': {
        nav_features: 'Features',
        nav_pricing: 'Pricing',
        nav_download: 'Download',
        nav_privacy: 'Privacy Policy',
        nav_terms: 'Terms of Service',
        hero_title: 'Elegantly save every conversation',
        hero_subtitle: 'Local-first, privacy-focused.<br>Export ChatGPT conversations to PDF, Markdown, DOCX, HTML, JSON, and more.',
        btn_get_started: 'Get Started',
        feature_1_title: 'Multi-format Export',
        feature_1_desc: 'Export to PDF, Markdown, DOCX, HTML, JSON, and more �?clean and readable outputs.',
        feature_2_title: 'Runs Locally',
        feature_2_desc: 'No backend required. Core logic runs locally. Auto adapts to dark/light mode.',
        feature_3_title: 'Privacy First',
        feature_3_desc: 'No tracking or ads. Conversation content stays local; license checks send only license data to our server and Creem.',
        feature_4_title: 'Formula Rendering',
        feature_4_desc: 'Perfect LaTeX math formula support, exports remain clear and readable.',
        feature_5_title: 'Batch Export',
        feature_5_desc: 'Export multiple chats to HTML/MD/DOCX/JSON with one click (Pro).',
        feature_6_title: 'Dockable Floating Button',
        feature_6_desc: 'Drag freely, dock to the edge, and auto-hide half to stay out of the way.',
        showcase_title: 'UI Preview',
        showcase_desc: 'Actual product interface',
        showcase_shot_1: 'Screenshot placeholder: Floating button (drag / edge hide)',
        showcase_shot_2: 'Screenshot placeholder: Export panel (format / selection / preferences)',
        showcase_shot_3: 'Screenshot placeholder: Export result (PDF / Markdown / DOCX)',
        showcase_1_title: 'Floating Shortcut',
        showcase_1_desc: 'Open the export panel anytime with minimal distraction.',
        showcase_2_title: 'Export Panel',
        showcase_2_desc: 'Pick format and preferences for cleaner exports.',
        showcase_3_title: 'Export Output',
        showcase_3_desc: 'Great for archiving, sharing, and editing.',
        features_title: 'Why Choose ChatShell',
        pricing_title: 'Choose Your Plan',
        pricing_free: 'Free',
        pricing_standard: 'Standard',
        pricing_pro: 'Pro',
        pricing_once: 'per month',
        pricing_popular: 'Popular',
        pricing_free_price: '$0',
        pricing_std_price: '$4',
        pricing_pro_price: '$8',
        pricing_std_year: 'Annual $36 (save 25%)',
        pricing_pro_year: 'Annual $72 (save 25%)',
        pricing_free_1: '3 PDF exports/month',
        pricing_free_2: '5 other exports/month',
        pricing_free_3: 'With watermark',
        pricing_free_limit: '3 PDF/month, 5 others/month',
        pricing_free_watermark: '�?With watermark',
        pricing_free_nobatch: '�?Batch export & Team space',
        pricing_std_1: '�?Unlimited exports · No watermark',
        pricing_std_2: '�?Timestamps & Remove separators',
        pricing_std_3: '�?All formats',
        pricing_std_nobatch: '�?Batch export & Team space',
        pricing_pro_1: '�?All Standard features',
        pricing_pro_2: '�?Batch export & Team space',
        pricing_pro_3: '�?Backup report reminders (coming soon)',
        pricing_upgrade_title: 'Already on Standard? Upgrade to Pro',
        pricing_upgrade_desc: 'Subscribe to Pro to unlock batch export.',
        pricing_upgrade_btn: 'Upgrade to Pro',
        pricing_buy: 'Subscribe',
        pricing_free_btn: 'Download Free',
        download_title: 'Get Started',
        download_desc: 'Get the latest version from GitHub. Chrome Web Store coming soon.',
        download_meta: 'Current version: v1.0.0.1',
        download_action: 'Download Latest',
        // Legal pages
        privacy_title: 'Privacy Policy',
        privacy_date: 'Last updated: January 22, 2026',
        privacy_h1: '1. Overview',
        privacy_p1: 'ChatShell is a local-first ChatGPT export tool. We do not collect, sell, or share conversation content with developer servers.',
        privacy_h2: '2. Data Access & Processing',
        privacy_p2: 'We do not collect conversation content. Export runs only when you initiate it.',
        privacy_li1: 'Exports are generated locally in your browser and only run when you initiate an export.',
        privacy_li2: 'We capture ChatGPT access tokens to call ChatGPT APIs for export/attachments; tokens stay in memory and are never sent to developer servers.',
        privacy_li3: 'No analytics, tracking, or advertising tools.',
        privacy_h3: '3. Local Storage',
        privacy_p3: 'The extension uses browser storage to save:',
        privacy_li4: 'User preferences (theme, timestamps, watermark, etc.)',
        privacy_li5: 'License Key and license status (stored in chrome.storage.sync)',
        privacy_li6: 'Usage counters (stored in chrome.storage.local, only for free plan limits)',
        privacy_p3b: 'We do not store your conversation content. This data stays on your device/browser.',
        privacy_h4: '4. Third-party Services',
        privacy_p4: 'When you activate a license, we send the license key and a local instance ID to Cloudflare Workers and Creem for validation. No conversation content is sent.',
        privacy_h5: '5. Network Requests & Security',
        privacy_p5: 'Exports may access chatgpt.com / chat.openai.com; attachments may download from *.oaiusercontent.com; license checks reach our license server and Creem. All requests use HTTPS.',
        privacy_h6: '6. Limited Use',
        privacy_p6: 'Our use of information received from Google APIs adheres to the Chrome Web Store User Data Policy, including Limited Use.',
        privacy_h7: '7. Contact Us',
        privacy_p7: 'If you have any privacy-related questions, please contact:',
        terms_title: 'Terms of Service',
        terms_date: 'Last updated: January 22, 2026',
        terms_h1: '1. Service Overview',
        terms_p1: 'ChatShell is a browser extension that allows users to export ChatGPT conversations. By using this service, you agree to these terms.',
        terms_h2: '2. License',
        terms_li1: 'Free version: Available for free with export limits and watermarks',
        terms_li2: 'Paid version: Subscription unlocks full features during the billing period; you can cancel anytime',
        terms_h3: '3. User Responsibilities',
        terms_p3: 'You agree to:',
        terms_li3: 'Use this extension only for lawful purposes',
        terms_li4: 'Not share or resell your License Key',
        terms_li5: 'Not attempt to bypass paid feature restrictions',
        terms_li6: 'Comply with ChatGPT\'s terms of use',
        terms_h4: '4. Disclaimer',
        terms_li7: 'This extension is provided "as is" without any express or implied warranties',
        terms_li8: 'We are not responsible for the accuracy or completeness of exported content',
        terms_li9: 'We are not liable for any damages caused by use of this extension',
        terms_li10: 'This extension is not affiliated with OpenAI or ChatGPT',
        terms_h5: '5. Refund Policy',
        terms_p5: 'Refunds are available before a license is activated. Once a license has been activated, it is non-refundable. Subscriptions can be canceled via the payment provider; access remains active until the end of the billing cycle. If the payment provider or local law provides stronger rights, those terms apply.',
        terms_h6: '6. Terms Changes',
        terms_p6: 'We reserve the right to modify these terms at any time. Significant changes will be announced on the website.',
        terms_h7: '7. Contact',
        terms_p7: 'Seller: SCF. Contact:',
        lang_btn: '�?,

        // FAQ & Feedback
        faq_title: 'FAQ',
        faq_1_q: 'Where is my data stored?',
        faq_1_a: 'All conversation data is saved only in your local browser. We cannot access, view, or store any of your data.',
        faq_2_q: 'How to activate Pro version?',
        faq_2_a: 'You will receive a License Key after subscribing. Enter it in the "Account" page of the extension to activate.',
        faq_3_q: 'Which browsers are supported?',
        faq_3_a: 'All Chromium-based browsers are supported, such as Chrome, Edge, Brave, Arc, etc.',
        faq_4_q: 'What export formats are supported?',
        faq_4_a: 'Single chat: PDF, Markdown, DOCX, JSON. Batch export: HTML, Markdown, DOCX, JSON.',
        faq_5_q: 'Can I use my subscription on multiple devices?',
        faq_5_a: 'Yes. Your License Key syncs via browser, so you can use it across devices.',

        feedback_title: 'Feedback',
        feedback_desc: 'Have questions or suggestions? Feel free to contact us anytime.',
        feedback_email_label: 'Email us at:',
        feedback_action_email: 'Send Email',
        feedback_action_issue: 'Submit Issue'
    }
};

// ... existing code ...

// Initialize


let currentLang = localStorage.getItem('chatshell-lang') || 'zh-CN';
const PRICE_BASE_USD = {
    free: 0,
    standard: 4,
    pro: 8
};
const PRICE_YEARLY_USD = {
    standard: 36,
    pro: 72
};
const PRICE_CURRENCY = {
    USD: '$',
    CNY: '¥'
};
let exchangeRateCny = null;

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitch();
    initPricing();
    // Only init these on main page (check if elements exist)
    if (document.querySelector('.hero')) {
        initScrollEffects();
        initIntersectionObserver();
        initDraggableWindow();
        initFaqAccordion();
    }
    initSmoothScroll();
});

function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-question');
    faqItems.forEach((item, index) => {
        const parent = item.parentElement;
        if (!parent) return;
        const answer = parent.querySelector('.faq-answer');

        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');
        if (answer && !answer.id) {
            answer.id = `faq-answer-${index + 1}`;
        }
        if (answer && answer.id) {
            item.setAttribute('aria-controls', answer.id);
        }

        const updateState = () => {
            const isActive = parent.classList.toggle('active');
            item.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        };

        item.setAttribute('aria-expanded', parent.classList.contains('active') ? 'true' : 'false');

        item.addEventListener('click', updateState);
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                updateState();
            }
        });
    });
}

// ========================================
// Language Switching
// ========================================
function initLanguageSwitch() {
    const langBtn = document.getElementById('lang-toggle');
    if (!langBtn) return;

    // Set initial button text based on saved language
    langBtn.textContent = translations[currentLang].lang_btn;
    document.documentElement.lang = currentLang;
    updateLanguage();

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
        localStorage.setItem('chatshell-lang', currentLang);
        langBtn.textContent = translations[currentLang].lang_btn;
        updateLanguage();
        document.documentElement.lang = currentLang;
        updatePricingUI();
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (key === 'hero_title' || key === 'hero_subtitle') {
                const value = String(translations[currentLang][key]);
                const parts = value.split(/<br\s*\/?\s*>/i);
                el.textContent = '';
                parts.forEach((part, idx) => {
                    if (idx > 0) {
                        el.appendChild(document.createElement('br'));
                    }
                    el.appendChild(document.createTextNode(part));
                });
            } else if (el.querySelector('span')) {
                // For buttons with icons, only update the span text
                el.querySelector('span').textContent = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });

    const cnText = document.querySelector('.cn-text');
    if (cnText) {
        cnText.style.display = currentLang === 'zh-CN' ? 'inline' : 'none';
    }
}

async function initPricing() {
    updatePricingUI();
}

function formatCurrency(amount, currency) {
    const symbol = PRICE_CURRENCY[currency] || '';
    const rounded = Math.round(amount);
    return `${symbol}${rounded}`;
}

function updatePricingUI() {
    const useCny = currentLang === 'zh-CN';
    const currency = useCny ? 'CNY' : 'USD';
    const stdMonthly = useCny ? 12 : PRICE_BASE_USD.standard;
    const proMonthly = useCny ? 25 : PRICE_BASE_USD.pro;
    const stdYear = useCny ? 108 : PRICE_YEARLY_USD.standard;
    const proYear = useCny ? 225 : PRICE_YEARLY_USD.pro;

    const stdYearlyFromMonthly = stdMonthly * 12;
    const proYearlyFromMonthly = proMonthly * 12;
    const stdSave = stdYearlyFromMonthly - stdYear;
    const proSave = proYearlyFromMonthly - proYear;

    const setText = (key, value) => {
        const el = document.querySelector(`[data-i18n="${key}"]`);
        if (el) el.textContent = value;
    };

    setText('pricing_free_price', formatCurrency(PRICE_BASE_USD.free, currency));
    setText('pricing_std_price', formatCurrency(stdMonthly, currency));
    setText('pricing_pro_price', formatCurrency(proMonthly, currency));

    if (currentLang === 'zh-CN') {
        setText('pricing_std_year', `年付 ${formatCurrency(stdYear, currency)}（省 ${formatCurrency(stdSave, currency)}）`);
        setText('pricing_pro_year', `年付 ${formatCurrency(proYear, currency)}（省 ${formatCurrency(proSave, currency)}）`);
    } else {
        setText('pricing_std_year', `Annual ${formatCurrency(stdYear, currency)} (save ${formatCurrency(stdSave, currency)})`);
        setText('pricing_pro_year', `Annual ${formatCurrency(proYear, currency)} (save ${formatCurrency(proSave, currency)})`);
    }
}

// ========================================
// Scroll Effects
// ========================================
function initScrollEffects() {
    const nav = document.querySelector('.glass-nav');
    let ticking = false;

    function updateNav() {
        const scrollY = window.scrollY;

        if (scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    }, { passive: true });

    updateNav();
}

// ========================================
// Intersection Observer for Animations
// ========================================
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.feature-card, .showcase-card, .hero h1, .hero p, .hero .cta-group, .mockup-window');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            e.preventDefault();

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.glass-nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Draggable Window (Yellow Dot)
// ========================================
function initDraggableWindow() {
    const mockupWindow = document.querySelector('.mockup-window');
    const dragHandle = document.querySelector('.dot.yellow');

    if (!mockupWindow || !dragHandle) return;

    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    // Set initial position style if not set
    if (!mockupWindow.style.transform) {
        // We rely on CSS positioning usually, but for dragging we might need absolute or translate
        // However, the CSS currently uses transform: translateY(...) for animation. 
        // We should switch to a transform-based drag to coexist with animations or wait for animation to end.
    }

    // Add cursor style
    dragHandle.style.cursor = 'grab';
    dragHandle.title = 'Drag to move';

    // Helper to get current translate values
    function getTranslateValues(element) {
        const style = window.getComputedStyle(element);
        const matrix = new WebKitCSSMatrix(style.transform);
        return { x: matrix.m41, y: matrix.m42 };
    }

    // Initialize current translation
    let currentTranslate = { x: 0, y: 0 };

    dragHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragHandle.style.cursor = 'grabbing';

        // Get current mouse position
        startX = e.clientX;
        startY = e.clientY;

        // Get current transform values
        currentTranslate = getTranslateValues(mockupWindow);

        // Disable transition during drag for smoothness
        mockupWindow.style.transition = 'none';

        e.preventDefault(); // Prevent text selection
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        const newX = currentTranslate.x + deltaX;
        const newY = currentTranslate.y + deltaY;

        mockupWindow.style.transform = `translate(${newX}px, ${newY}px)`;
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        dragHandle.style.cursor = 'grab';

        // Re-enable transition for other effects if needed, 
        // but keep it off for transform to avoid springing back if we had a reset logic
        // mockupWindow.style.transition = ''; 
    });
}
