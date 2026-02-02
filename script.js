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
        hero_title: '优雅地保存每一段对话',
        hero_subtitle: '本地运行，隐私优先。<br>完美支持 LaTeX 数学公式，导出为 PDF、Markdown、DOCX 等格式。',
        hero_caption: '左：导出的 Markdown · 中：ChatGPT 原始对话 · 右：ChatShell 插件',
        btn_get_started: '开始使用',
        feature_1_title: '多格式导出',
        feature_1_desc: '支持 PDF、Markdown、DOCX、HTML、JSON 等格式，导出更干净、更可读。',
        feature_2_title: '本地运行',
        feature_2_desc: '无需后台服务，主要逻辑在浏览器本地完成，使用更安心。',
        feature_3_title: '隐私优先',
        feature_3_desc: '不做追踪与广告；不把对话数据发送到开发者服务器。',
        feature_4_title: '公式渲染',
        feature_4_desc: '完美支持 LaTeX 数学公式，导出后仍保持清晰可读。',
        feature_5_title: '批量导出',
        feature_5_desc: '一键导出多个对话至 HTML/MD/DOCX/JSON（Pro）。',
        feature_6_title: '贴边浮动入口',
        feature_6_desc: '可自由拖拽，贴边后自动隐藏一半，不挡阅读视线。',
        showcase_title: '界面预览',
        showcase_desc: '实际产品界面展示',
        showcase_1_title: '偏好设置',
        showcase_1_desc: '把导出格式与细节调到你喜欢的样子。',
        showcase_2_title: '批量导出（Pro）',
        showcase_2_desc: '一键导出多个对话，省下重复操作时间。',
        showcase_3_title: 'License 激活',
        showcase_3_desc: '无需登录账号，输入 License Key 即可解锁 Standard/Pro。',
        features_title: '为什么选择 ChatShell',
        pricing_title: '选择适合你的版本',
        pricing_free: '免费版',
        pricing_standard: '标准版',
        pricing_pro: '专业版',
        pricing_once: '每月',
        pricing_popular: '热门',
        pricing_free_price: '$0',
        pricing_std_price: '$4',
        pricing_pro_price: '$8',
        pricing_std_year: '年付 $36（省 $12）',
        pricing_pro_year: '年付 $72（省 $24）',
        pricing_free_limit: 'PDF 3次/月，其他格式共 5次/月',
        pricing_free_watermark: '✗ 有水印',
        pricing_free_nobatch: '✗ 批量导出 & 团队空间',
        pricing_std_1: '✓ 无限导出 · 无水印',
        pricing_std_2: '✓ 时间戳 & 移除分隔线',
        pricing_std_nobatch: '✗ 批量导出 & 团队空间',
        pricing_pro_1: '✓ 标准版全部功能',
        pricing_pro_2: '✓ 批量导出 & 团队空间',
        pricing_pro_3: '✓ 备份报告提醒（即将上线）',
        pricing_buy: '立即订阅',
        pricing_free_btn: '免费下载',
        download_title: '开始使用',
        download_desc: '仅通过 Chrome Web Store 安装与更新（自动更新）。',
        download_meta: '当前版本：v1.0.0.3',
        download_action: '前往 Chrome Web Store',
        // Legal pages
        privacy_title: '隐私政策',
        privacy_date: '最后更新：2026年1月25日',
        privacy_h1: '1. 概述',
        privacy_p1: 'ChatShell 是本地优先的 ChatGPT 对话导出工具。我们不收集、出售或共享对话内容给开发者服务器。',
        privacy_h2: '2. 数据访问与处理',
        privacy_p2: '我们不收集对话内容。导出仅在您发起时运行：',
        privacy_li1: '访问当前页面的对话内容，仅用于本地导出功能',
        privacy_li2: '临时获取 ChatGPT 访问令牌以调用 ChatGPT 接口导出和下载附件',
        privacy_li3: '访问令牌仅存储在内存中，不会发送到开发者服务器',
        privacy_h3: '3. 本地存储',
        privacy_p3: '我们使用浏览器存储来保存以下数据：',
        privacy_li4: '语言偏好存储于 chrome.storage.sync',
        privacy_li5: 'License Key 存储于 chrome.storage.sync（开启浏览器同步时可跨设备同步）',
        privacy_li6: 'License 状态、设备标识和使用计数存储于 chrome.storage.local',
        privacy_p3b: '导出的文件不存储于本地存储，我们不存储您的对话内容。',
        privacy_h4: '4. 第三方服务',
        privacy_p4: '激活 License 时会将 License Key 和本地实例标识发送到 Cloudflare Workers，然后转发给 Creem 许可证服务，不发送对话内容。',
        privacy_h5: '5. 网络请求与安全',
        privacy_p5: '插件可能会访问 chatgpt.com / chat.openai.com（导出）以及 License 服务（校验）。所有请求均使用 HTTPS 协议。',
        privacy_h6: '6. Limited Use',
        privacy_p6: '我们遵守 Chrome Web Store User Data Policy，符合 Limited Use 条款。',
        privacy_h7: '7. 联系我们',
        privacy_p7: '联系邮箱：',
        terms_title: '服务条款',
        terms_date: '最后更新：2026年1月25日',
        terms_h1: '1. 服务概述',
        terms_p1: 'ChatShell 是一款帮助用户导出 ChatGPT 对话的浏览器扩展。使用本服务即表示您同意以下条款。',
        terms_h2: '2. 使用许可',
        terms_li1: '免费版本：可免费使用，有导出次数限制和水印',
        terms_li2: '付费版本：订阅后可在订阅期内使用全部功能，可随时取消',
        terms_h3: '3. 用户责任',
        terms_p3: '您需要：',
        terms_li3: '仅将本扩展用于合法目的',
        terms_li4: '不分享或转售您的 License Key',
        terms_li5: '不尝试绕过付费功能限制',
        terms_li6: '遵守 ChatGPT 的使用条款',
        terms_h4: '4. 免责声明',
        terms_li7: '本扩展按"原样"提供，不作任何明示或暗示的保证',
        terms_li8: '我们不对导出内容的准确性或完整性负责',
        terms_li9: '我们不对使用本扩展导致的任何损失负责',
        terms_li10: '本扩展与 OpenAI 或 ChatGPT 无关联',
        terms_h5: '5. 退款政策',
        terms_p5: 'License 激活前可申请退款；一旦激活则不可退款。订阅可通过支付服务商取消，当前周期仍有效直至到期。若支付服务商或当地法律提供更强权利，以其条款为准。',
        terms_h6: '6. 条款变更',
        terms_p6: '我们保留随时修改这些条款的权利，重大变更将在网站公告。',
        terms_h7: '7. 联系方式',
        terms_p7: '开发者：SCF，联系邮箱：',
        lang_btn: 'En',
        // FAQ & Feedback
        faq_title: '常见问题',
        faq_1_q: '数据存储在哪里？',
        faq_1_a: '所有对话数据仅保存在您的本地浏览器中。我们无法访问、查看或存储您的任何数据。',
        faq_2_q: '如何激活付费版本？',
        faq_2_a: '订阅后您将收到一个 License Key。在插件的"账户"页面输入该 Key 即可激活。',
        faq_3_q: '支持哪些浏览器？',
        faq_3_a: '支持所有基于 Chromium 内核的浏览器，如 Chrome, Edge, Brave, Arc 等。',
        faq_4_q: '支持哪些导出格式？',
        faq_4_a: '单对话导出支持 PDF、Markdown、DOCX、JSON；批量导出支持 HTML、Markdown、DOCX、JSON。',
        faq_5_q: '订阅可以在多台设备上使用吗？',
        faq_5_a: '可以。如果你开启了浏览器同步（如 Chrome Sync），License Key 会跨设备同步并在每台设备上自动完成激活。',
        faq_6_q: '需要哪些权限？',
        faq_6_a: '插件仅使用 storage 权限保存设置与 License 信息。导出仅在 chatgpt.com / chat.openai.com 页面运行，并会访问 License 服务完成激活/校验。',
        feedback_title: '问题反馈',
        feedback_desc: '遇到问题或有功能建议？欢迎随时联系我们。我们会认真阅读每一条反馈。',
        feedback_email_label: '联系邮箱：',
        feedback_action_email: '发送邮件',
        feedback_action_issue: '提交 GitHub Issue'
    },
    'en': {
        nav_features: 'Features',
        nav_pricing: 'Pricing',
        nav_download: 'Download',
        nav_privacy: 'Privacy Policy',
        nav_terms: 'Terms of Service',
        hero_title: 'Elegantly save every conversation',
        hero_subtitle: 'Local-first, privacy-focused.<br>Perfect LaTeX math support. Export to PDF, Markdown, DOCX, and more.',
        hero_caption: 'Left: Exported Markdown · Center: ChatGPT conversation · Right: ChatShell plugin',
        btn_get_started: 'Get Started',
        feature_1_title: 'Multi-format Export',
        feature_1_desc: 'Export to PDF, Markdown, DOCX, HTML, JSON, and more — clean and readable outputs.',
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
        showcase_1_title: 'Preferences',
        showcase_1_desc: 'Tune formats and details the way you like.',
        showcase_2_title: 'Batch Export (Pro)',
        showcase_2_desc: 'Export multiple chats in one go and save time.',
        showcase_3_title: 'License Activation',
        showcase_3_desc: 'No account required. Unlock Standard/Pro with a License Key.',
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
        pricing_std_year: 'Annual $36 (save $12)',
        pricing_pro_year: 'Annual $72 (save $24)',
        pricing_free_limit: '3 PDF/month, 5 others total/month',
        pricing_free_watermark: '✗ With watermark',
        pricing_free_nobatch: '✗ Batch export & Team space',
        pricing_std_1: '✓ Unlimited exports · No watermark',
        pricing_std_2: '✓ Timestamps & Remove separators',
        pricing_std_nobatch: '✗ Batch export & Team space',
        pricing_pro_1: '✓ All Standard features',
        pricing_pro_2: '✓ Batch export & Team space',
        pricing_pro_3: '✓ Backup report reminders (coming soon)',
        pricing_buy: 'Subscribe',
        pricing_free_btn: 'Download Free',
        download_title: 'Get Started',
        download_desc: 'Install and update via Chrome Web Store (auto-updates).',
        download_meta: 'Current version: v1.0.0.3',
        download_action: 'Get on Chrome Web Store',
        // Legal pages
        privacy_title: 'Privacy Policy',
        privacy_date: 'Last updated: January 25, 2026',
        privacy_h1: '1. Overview',
        privacy_p1: 'ChatShell is a local-first ChatGPT export tool. We do not collect, sell, or share conversation content with developer servers.',
        privacy_h2: '2. Data Access & Processing',
        privacy_p2: 'We do not collect conversation content. Export runs only when you initiate it.',
        privacy_li1: 'Exports are generated locally in your browser and only run when you initiate an export.',
        privacy_li2: 'We capture ChatGPT access tokens to call ChatGPT APIs for exporting; tokens stay in memory and are never sent to developer servers.',
        privacy_li3: 'No analytics, tracking, or advertising tools.',
        privacy_h3: '3. Local Storage',
        privacy_p3: 'The extension uses browser storage to save:',
        privacy_li4: 'Language preference (stored in chrome.storage.sync)',
        privacy_li5: 'License Key (stored in chrome.storage.sync; syncs across devices if browser sync is enabled)',
        privacy_li6: 'License status, instance ID, and usage counters (stored in chrome.storage.local)',
        privacy_p3b: 'We do not store your conversation content. This data stays on your device/browser.',
        privacy_h4: '4. Third-party Services',
        privacy_p4: 'When you activate a license, we send the license key and a local instance ID to Cloudflare Workers and Creem for validation. No conversation content is sent.',
        privacy_h5: '5. Network Requests & Security',
        privacy_p5: 'Exports may access chatgpt.com / chat.openai.com; license checks reach our license server and Creem. All requests use HTTPS.',
        privacy_h6: '6. Limited Use',
        privacy_p6: 'Our use of information received from Google APIs adheres to the Chrome Web Store User Data Policy, including Limited Use.',
        privacy_h7: '7. Contact Us',
        privacy_p7: 'If you have any privacy-related questions, please contact:',
        terms_title: 'Terms of Service',
        terms_date: 'Last updated: January 25, 2026',
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
        lang_btn: '中文',
        // FAQ & Feedback
        faq_title: 'Frequently Asked Questions',
        faq_1_q: 'Where is my data stored?',
        faq_1_a: 'All conversation data is saved only in your local browser. We cannot access, view, or store any of your data.',
        faq_2_q: 'How to activate Pro version?',
        faq_2_a: 'You will receive a License Key after subscribing. Enter it in the "Account" page of the extension to activate.',
        faq_3_q: 'Which browsers are supported?',
        faq_3_a: 'All Chromium-based browsers are supported, such as Chrome, Edge, Brave, Arc, etc.',
        faq_4_q: 'What export formats are supported?',
        faq_4_a: 'Single chat: PDF, Markdown, DOCX, JSON. Batch export: HTML, Markdown, DOCX, JSON.',
        faq_5_q: 'Can I use my subscription on multiple devices?',
        faq_5_a: 'Yes. If browser sync is enabled, your License Key will sync across devices and ChatShell will activate it automatically on each device.',
        faq_6_q: 'What permissions does it require?',
        faq_6_a: 'ChatShell only uses the storage permission to save preferences and license info. It runs on chatgpt.com / chat.openai.com and contacts our license server for activation/validation.',
        feedback_title: 'Feedback',
        feedback_desc: 'Have questions or suggestions? Feel free to contact us anytime.',
        feedback_email_label: 'Email us at:',
        feedback_action_email: 'Send Email',
        feedback_action_issue: 'Submit Issue'
    }
};

// Initialize
let currentLang = localStorage.getItem('chatshell-lang') || 'zh-CN';

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitch();
    initPricing();
    // Only init these on main page (check if elements exist)
    if (document.querySelector('.hero')) {
        initScrollEffects();
        initIntersectionObserver();
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

function initPricing() {
    const toggle = document.getElementById('billing-toggle');
    if (!toggle) return;

    const STORAGE_KEY = 'chatshell-billing';
    const saved = localStorage.getItem(STORAGE_KEY);
    const initialMode = saved === 'monthly' ? 'monthly' : 'annual';
    toggle.checked = initialMode === 'monthly';

    const formatUsd = (amount) => {
        const rounded = Math.round(amount);
        return `$${rounded}`;
    };

    const update = () => {
        const mode = toggle.checked ? 'monthly' : 'annual';
        localStorage.setItem(STORAGE_KEY, mode);

        const cards = document.querySelectorAll('.pricing-card[data-plan]');
        cards.forEach((card) => {
            const amountEl = card.querySelector('.price-amount[data-price-monthly][data-price-annual]');
            const periodEl = card.querySelector('.price-period');
            const badgeEl = card.querySelector('[data-role="price-badge"]');
            const buyEl = card.querySelector('a.btn[data-monthly-href][data-annual-href]');
            if (!amountEl || !periodEl || !badgeEl || !buyEl) return;

            const monthly = Number(amountEl.getAttribute('data-price-monthly'));
            const annual = Number(amountEl.getAttribute('data-price-annual'));
            const hasNumbers = Number.isFinite(monthly) && Number.isFinite(annual) && monthly > 0 && annual > 0;
            if (!hasNumbers) return;

            if (mode === 'annual') {
                amountEl.textContent = formatUsd(annual);
                periodEl.textContent = '/ year';
                buyEl.href = buyEl.getAttribute('data-annual-href');

                const save = Math.max(0, monthly * 12 - annual);
                if (save > 0) {
                    badgeEl.style.display = 'inline-flex';
                    badgeEl.textContent = `Save ${formatUsd(save)}`;
                } else {
                    badgeEl.style.display = 'none';
                    badgeEl.textContent = '';
                }
            } else {
                amountEl.textContent = formatUsd(monthly);
                periodEl.textContent = '/ month';
                buyEl.href = buyEl.getAttribute('data-monthly-href');
                badgeEl.style.display = 'none';
                badgeEl.textContent = '';
            }
        });
    };

    toggle.addEventListener('change', update);
    update();
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

    const animatedElements = document.querySelectorAll('.feature-card, .showcase-item, .hero h1, .hero p, .hero .cta-group, .mockup-window');
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


