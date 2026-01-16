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
        hero_subtitle: '本地运行，隐私优先。<br>将 ChatGPT 对话导出为 PDF、Markdown、DOCX 等格式。',
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
        showcase_desc: '这里预留配图位置，后续可替换为真实截图。',
        showcase_shot_1: '截图占位：浮动按钮（可拖拽 / 贴边自动隐藏）',
        showcase_shot_2: '截图占位：导出面板（格式 / 选中导出 / 偏好设置）',
        showcase_shot_3: '截图占位：导出结果（PDF / Markdown / DOCX）',
        showcase_1_title: '浮动入口',
        showcase_1_desc: '随时一键呼出导出面板，减少打扰。',
        showcase_2_title: '导出面板',
        showcase_2_desc: '选择格式与偏好，导出更干净、更可读。',
        showcase_3_title: '导出结果',
        showcase_3_desc: '适合归档、分享与二次编辑。',
        features_title: '为什么选择 ChatShell',
        pricing_title: '选择适合你的版本',
        pricing_free: '免费版',
        pricing_standard: '标准版',
        pricing_pro: '专业版',
        pricing_once: '一次性',
        pricing_popular: '推荐',
        pricing_free_price: '¥0',
        pricing_std_price: '¥89',
        pricing_pro_price: '¥279',
        pricing_free_1: 'PDF 导出 3次/月',
        pricing_free_2: '其他格式 5次/月',
        pricing_free_3: '带水印',
        pricing_free_limit: '每月限 3-5 次',
        pricing_free_watermark: '✗ 带水印',
        pricing_free_nobatch: '✗ 批量导出 & 团队空间',
        pricing_std_1: '✓ 无限导出 · 无水印',
        pricing_std_2: '✓ 时间戳 & 移除分隔线',
        pricing_std_3: '✓ 所有格式',
        pricing_std_nobatch: '✗ 批量导出 & 团队空间',
        pricing_std_noattach: '✗ 附件下载',
        pricing_pro_1: '✓ 标准版全部功能',
        pricing_pro_2: '✓ 批量导出 & 团队空间',
        pricing_pro_3: '✓ 附件下载',
        pricing_buy: '立即购买',
        pricing_free_btn: '免费下载',
        download_title: '开始使用',
        download_desc: '从 GitHub 获取最新版本，按说明安装。Chrome Web Store 即将上架。',
        download_meta: '当前版本：v1.0.0.1',
        download_action: '下载最新版本',
        // Legal pages
        privacy_title: '隐私政策',
        privacy_date: '最后更新：2025年12月',
        privacy_h1: '1. 概述',
        privacy_p1: 'ChatShell（"拾贝"）是一款浏览器扩展，帮助用户导出 ChatGPT 对话。我们重视您的隐私，本政策说明我们如何处理您的数据。',
        privacy_h2: '2. 数据访问与处理',
        privacy_p2: '我们不收集任何个人数据。',
        privacy_li1: '导出内容在您的浏览器本地生成，仅在您主动触发导出时运行',
        privacy_li2: '对话内容不会发送到开发者自有服务器；网络请求仅用于与 ChatGPT 官方站点通信以完成导出',
        privacy_li3: '我们不使用任何分析、追踪或广告工具',
        privacy_h3: '3. 本地存储',
        privacy_p3: '扩展使用浏览器存储功能保存：',
        privacy_li4: '用户偏好设置（如主题、时间戳、水印等）',
        privacy_li5: 'License Key（存储在 chrome.storage.sync，用于跨设备同步）',
        privacy_li6: '导出次数统计（存储在 chrome.storage.local，仅用于免费版限制）',
        privacy_p3b: '我们不会存储您的对话内容。以上数据仅存储在您的设备/浏览器中，我们无法访问。',
        privacy_h4: '4. 第三方服务',
        privacy_p4: '付费版本通过 Creem 处理支付。支付过程由 Creem 完成，我们不会接触您的支付信息；您会收到 License Key 用于激活。',
        privacy_h5: '5. 网络请求与安全',
        privacy_p5: '导出时扩展可能会向 chatgpt.com / chat.openai.com 请求对话数据；若启用附件导出，会从 *.oaiusercontent.com 下载附件。除此之外，扩展不会向开发者服务器传输对话内容。',
        privacy_h6: '6. 联系我们',
        privacy_p6: '如有任何隐私相关问题，请联系：',
        terms_title: '服务条款',
        terms_date: '最后更新：2025年12月',
        terms_h1: '1. 服务概述',
        terms_p1: 'ChatShell（"拾贝"）是一款浏览器扩展，允许用户将 ChatGPT 对话导出为多种格式。使用本服务即表示您同意以下条款。',
        terms_h2: '2. 使用许可',
        terms_li1: '免费版：可免费使用，有导出次数限制和水印',
        terms_li2: '付费版：购买 License Key 后解锁完整功能，为一次性购买，永久有效',
        terms_h3: '3. 用户责任',
        terms_p3: '您同意：',
        terms_li3: '仅将本扩展用于合法目的',
        terms_li4: '不分享或转售您的 License Key',
        terms_li5: '不尝试绕过付费功能限制',
        terms_li6: '遵守 ChatGPT 的使用条款',
        terms_h4: '4. 免责声明',
        terms_li7: '本扩展按“现状”提供，不提供任何明示或暗示的保证',
        terms_li8: '我们不对导出内容的准确性或完整性负责',
        terms_li9: '我们不对因使用本扩展造成的任何损失负责',
        terms_li10: '本扩展与 OpenAI 或 ChatGPT 无关联',
        terms_h5: '5. 退款政策',
        terms_p5: '由于数字产品的特性，付费版本一经激活不支持退款。如遇技术问题，请联系我们寻求帮助。',
        terms_h6: '6. 条款变更',
        terms_p6: '我们保留随时修改本条款的权利。重大变更将通过网站公告通知。',
        terms_h7: '7. 联系方式',
        terms_p7: '如有任何问题，请联系：',
        lang_btn: 'En',

        // FAQ & Feedback
        faq_title: '常见问题',
        faq_1_q: '数据存储在哪里？',
        faq_1_a: '所有对话数据仅保存在您的本地浏览器中。我们无法访问、查看或存储您的任何数据。',
        faq_2_q: '如何激活付费版本？',
        faq_2_a: '购买后您将收到一个 License Key。在插件的“账户”页面输入该 Key 即可激活。',
        faq_3_q: '支持哪些浏览器？',
        faq_3_a: '支持所有基于 Chromium 内核的浏览器，如 Chrome, Edge, Brave, Arc 等。',

        feedback_title: '问题反馈',
        feedback_desc: '遇到问题或有功能建议？欢迎随时联系我们。我们会认真阅读每一条反馈。',
        feedback_email_label: '发送邮件至：',
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
        hero_subtitle: 'Local-first, privacy-focused.<br>Export ChatGPT conversations to PDF, Markdown, DOCX, and more.',
        btn_get_started: 'Get Started',
        feature_1_title: 'Multi-format Export',
        feature_1_desc: 'Export to PDF, Markdown, DOCX, HTML, JSON, and more — clean and readable outputs.',
        feature_2_title: 'Runs Locally',
        feature_2_desc: 'No backend required. Core logic runs locally in your browser.',
        feature_3_title: 'Privacy First',
        feature_3_desc: 'No tracking or ads. We don\'t send conversation data to developer-owned servers.',
        feature_4_title: 'Formula Rendering',
        feature_4_desc: 'Perfect LaTeX math formula support, exports remain clear and readable.',
        feature_5_title: 'Batch Export',
        feature_5_desc: 'Export multiple chats to HTML/MD/DOCX/JSON with one click (Pro).',
        feature_6_title: 'Dockable Floating Button',
        feature_6_desc: 'Drag freely, dock to the edge, and auto-hide half to stay out of the way.',
        showcase_title: 'UI Preview',
        showcase_desc: 'Placeholders for screenshots — swap in your own images later.',
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
        pricing_once: 'one-time',
        pricing_popular: 'Popular',
        pricing_free_price: '$0',
        pricing_std_price: '$12.4',
        pricing_pro_price: '$38.8',
        pricing_free_1: '3 PDF exports/month',
        pricing_free_2: '5 other exports/month',
        pricing_free_3: 'With watermark',
        pricing_free_limit: '3-5 exports/month',
        pricing_free_watermark: '✗ With watermark',
        pricing_free_nobatch: '✗ Batch export & Team space',
        pricing_std_1: '✓ Unlimited exports · No watermark',
        pricing_std_2: '✓ Timestamps & Remove separators',
        pricing_std_3: '✓ All formats',
        pricing_std_nobatch: '✗ Batch export & Team space',
        pricing_std_noattach: '✗ Attachment download',
        pricing_pro_1: '✓ All Standard features',
        pricing_pro_2: '✓ Batch export & Team space',
        pricing_pro_3: '✓ Attachment download',
        pricing_buy: 'Buy Now',
        pricing_free_btn: 'Download Free',
        download_title: 'Get Started',
        download_desc: 'Get the latest version from GitHub. Chrome Web Store coming soon.',
        download_meta: 'Current version: v1.0.0.1',
        download_action: 'Download Latest',
        // Legal pages
        privacy_title: 'Privacy Policy',
        privacy_date: 'Last updated: December 2025',
        privacy_h1: '1. Overview',
        privacy_p1: 'ChatShell is a browser extension that helps users export ChatGPT conversations. We value your privacy and this policy explains how we handle your data.',
        privacy_h2: '2. Data Access & Processing',
        privacy_p2: 'We do not collect any personal data.',
        privacy_li1: 'Exports are generated locally in your browser and only run when you initiate an export',
        privacy_li2: 'Conversation data is not sent to any developer-owned server; network requests are only used to talk to official ChatGPT sites for exporting',
        privacy_li3: 'No analytics, tracking, or advertising tools',
        privacy_h3: '3. Local Storage',
        privacy_p3: 'The extension uses browser storage to save:',
        privacy_li4: 'User preferences (theme, timestamps, watermark, etc.)',
        privacy_li5: 'License Key (stored in chrome.storage.sync for cross-device sync)',
        privacy_li6: 'Usage counters (stored in chrome.storage.local, only for free plan limits)',
        privacy_p3b: 'We do not store your conversation content. This data stays on your device/browser and we cannot access it.',
        privacy_h4: '4. Third-party Services',
        privacy_p4: 'Paid versions are processed through Creem. Payments are handled by Creem and we do not receive your payment details; you receive a License Key for activation.',
        privacy_h5: '5. Network Requests & Security',
        privacy_p5: 'During export, the extension may request data from chatgpt.com / chat.openai.com; if attachment export is enabled, it may download files from *.oaiusercontent.com. Other than that, no conversation data is sent to developer-owned servers.',
        privacy_h6: '6. Contact Us',
        privacy_p6: 'If you have any privacy-related questions, please contact:',
        terms_title: 'Terms of Service',
        terms_date: 'Last updated: December 2025',
        terms_h1: '1. Service Overview',
        terms_p1: 'ChatShell is a browser extension that allows users to export ChatGPT conversations in various formats. By using this service, you agree to the following terms.',
        terms_h2: '2. License',
        terms_li1: 'Free version: Available for free with export limits and watermarks',
        terms_li2: 'Paid version: Unlock full features after purchasing a License Key, one-time purchase, valid forever',
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
        terms_p5: 'Due to the nature of digital products, paid versions are non-refundable once activated. If you encounter technical issues, please contact us for assistance.',
        terms_h6: '6. Terms Changes',
        terms_p6: 'We reserve the right to modify these terms at any time. Significant changes will be announced on the website.',
        terms_h7: '7. Contact',
        terms_p7: 'If you have any questions, please contact:',
        lang_btn: '中',

        // FAQ & Feedback
        faq_title: 'FAQ',
        faq_1_q: 'Where is my data stored?',
        faq_1_a: 'All conversation data is saved only in your local browser. We cannot access, view, or store any of your data.',
        faq_2_q: 'How to activate Pro version?',
        faq_2_a: 'You will receive a License Key after purchase. Enter it in the "Account" page of the extension to activate.',
        faq_3_q: 'Which browsers are supported?',
        faq_3_a: 'All Chromium-based browsers are supported, such as Chrome, Edge, Brave, Arc, etc.',

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

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitch();
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
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            parent.classList.toggle('active');
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
                el.innerHTML = translations[currentLang][key];
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
