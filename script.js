// ========================================

// ChatShell Landing Page - Elegant Scripts

// Clean, minimal interactions

// ========================================



const translations = {

    'zh-CN': {

        nav_features: 'åè½',

        nav_pricing: 'å®ä»·',

        nav_download: 'ä¸è½½',

        nav_privacy: 'éç§æ¿ç­',

        nav_terms: 'æå¡æ¡æ¬¾',

        hero_title: 'ä¼éå°ä¿å­æ¯ä¸æ®µå¯¹è¯?,

        hero_subtitle: 'æ¬å°è¿è¡ï¼éç§ä¼åã?br>å°?ChatGPT å¯¹è¯å¯¼åºä¸?PDFãMarkdownãDOCXãHTMLãJSON ç­æ ¼å¼ã?,

        btn_get_started: 'å¼å§ä½¿ç?,

        feature_1_title: 'å¤æ ¼å¼å¯¼å?,

        feature_1_desc: 'æ¯æ PDFãMarkdownãDOCXãHTMLãJSON ç­æ ¼å¼ï¼å¯¼åºæ´å¹²åãæ´å¯è¯»ã?,

        feature_2_title: 'æ¬å°è¿è¡',

        feature_2_desc: 'æ éåå°æå¡ï¼ä¸»è¦é»è¾å¨æµè§å¨æ¬å°å®æãèªå¨ééæ·±è²/æµè²æ¨¡å¼ã?,

        feature_3_title: '????',

        feature_3_desc: '????????????????License ????????????????? Creem?',

        feature_4_title: 'å¬å¼æ¸²æ',

        feature_4_desc: 'å®ç¾æ¯æ LaTeX æ°å­¦å¬å¼ï¼å¯¼åºåä»ä¿ææ¸æ°å¯è¯»ã?,

        feature_5_title: 'æ¹éå¯¼åº',

        feature_5_desc: 'ä¸é®å¯¼åºå¤ä¸ªå¯¹è¯è³ HTML/MD/DOCX/JSONï¼Proï¼ã?,

        feature_6_title: 'è´´è¾¹æµ®å¨å¥å£',

        feature_6_desc: 'å¯èªç±ææ½ï¼è´´è¾¹åèªå¨éèä¸åï¼ä¸æ¡éè¯»è§çº¿ã?,

        showcase_title: 'çé¢é¢è§',

        showcase_desc: 'å®éäº§åçé¢å±ç¤º',

        showcase_shot_1: 'æªå¾å ä½ï¼æµ®å¨æé®ï¼å¯ææ?/ è´´è¾¹èªå¨éèï¼?,

        showcase_shot_2: 'æªå¾å ä½ï¼å¯¼åºé¢æ¿ï¼æ ¼å¼ / éä¸­å¯¼åº / åå¥½è®¾ç½®ï¼?,

        showcase_shot_3: 'æªå¾å ä½ï¼å¯¼åºç»æï¼PDF / Markdown / DOCXï¼?,

        showcase_1_title: 'æµ®å¨å¥å£',

        showcase_1_desc: 'éæ¶ä¸é®å¼åºå¯¼åºé¢æ¿ï¼åå°ææ°ã?,

        showcase_2_title: 'å¯¼åºé¢æ¿',

        showcase_2_desc: 'éæ©æ ¼å¼ä¸åå¥½ï¼å¯¼åºæ´å¹²åãæ´å¯è¯»ã?,

        showcase_3_title: 'å¯¼åºç»æ',

        showcase_3_desc: 'éåå½æ¡£ãåäº«ä¸äºæ¬¡ç¼è¾ã?,

        features_title: 'ä¸ºä»ä¹éæ© ChatShell',

        pricing_title: 'éæ©éåä½ ççæ¬',

        pricing_free: 'åè´¹ç?,

        pricing_standard: 'æ åç?,

        pricing_pro: 'ä¸ä¸ç?,

        pricing_once: 'æ¯æ',

        pricing_popular: 'æ¨è',

        pricing_free_price: 'Â¥0',

        pricing_std_price: 'Â¥12',

        pricing_pro_price: 'Â¥25',

        pricing_std_year: 'å¹´ä» Â¥108ï¼ç Â¥36ï¼?,

        pricing_pro_year: 'å¹´ä» Â¥225ï¼ç Â¥75ï¼?,

        pricing_free_1: 'PDF å¯¼åº 3æ¬?æ?,

        pricing_free_2: 'å¶ä»æ ¼å¼ 5æ¬?æ?,

        pricing_free_3: 'å¸¦æ°´å?,

        pricing_free_limit: 'PDF 3æ¬?æï¼å¶ä» 5æ¬?æ?,

        pricing_free_watermark: 'â?å¸¦æ°´å?,

        pricing_free_nobatch: 'â?æ¹éå¯¼åº & å¢éç©ºé´',

        pricing_std_1: 'â?æ éå¯¼åº Â· æ æ°´å?,

        pricing_std_2: 'â?æ¶é´æ?& ç§»é¤åéçº?,

        pricing_std_3: 'â?æææ ¼å¼?,

        pricing_std_nobatch: 'â?æ¹éå¯¼åº & å¢éç©ºé´',

        pricing_pro_1: 'â?æ åçå¨é¨åè?,

        pricing_pro_2: 'â?æ¹éå¯¼åº & å¢éç©ºé´',

        pricing_pro_3: 'â?å®ææ¥åæéå¤ä»½ï¼å³å°ä¸çº¿ï¼',

        pricing_upgrade_title: 'å·²ææ åçï¼åçº§ä¸ä¸ç?,

        pricing_upgrade_desc: 'è®¢éä¸ä¸çè§£éæ¹éå¯¼åºåè?,

        pricing_upgrade_btn: 'åçº§å°ä¸ä¸ç',

        pricing_buy: 'ç«å³è®¢é',

        pricing_free_btn: 'åè´¹ä¸è½½',

        download_title: 'å¼å§ä½¿ç?,

        download_desc: 'ä»?GitHub è·åææ°çæ¬ï¼æè¯´æå®è£ãChrome Web Store å³å°ä¸æ¶ã?,

        download_meta: 'å½åçæ¬ï¼v1.0.0.1',

        download_action: 'ä¸è½½ææ°çæ?,

        // Legal pages

        privacy_title: 'éç§æ¿ç­',

        privacy_date: 'æåæ´æ°ï¼2026å¹?æ?2æ?,

        privacy_h1: '1. ??',

        privacy_p1: 'ChatShell æ¯æ¬å°ä¼åç ChatGPT å¯¹è¯å¯¼åºå·¥å·ãæä»¬ä¸ä¼æ¶éãåºå®æåäº«å¯¹è¯åå®¹å°å¼åèæå¡å¨ã?,

        privacy_h2: '2. ???????',

        privacy_p2: 'æä»¬ä»å¨ç¨æ·ä¸»å¨å¯¼åºæ¶è®¿é®å¿è¦æ°æ®ï¼',

        privacy_li1: 'è¯»åå½åé¡µé¢çå¯¹è¯åå®¹ï¼ç¨äºçæå¯¼åºæä»¶',

        privacy_li2: 'æè·è®¿é®ä»¤çç¨äºè°ç¨ ChatGPT æ¥å£å¯¼åºä¸ä¸è½½éä»?,

        privacy_li3: 'è®¿é®ä»¤çä»å¨åå­ä¸­ç­æä¿å­ï¼ä¸ä¼æä¹å?,

        privacy_h3: '3. ????',

        privacy_p3: 'æä»¬ä¼å¨æµè§å¨ä¸­ä¿å­å¿è¦è®¾ç½®ï¼?,

        privacy_li4: 'è¯­è¨ä¸åå¥½è®¾ç½®ä¿å­å¨ chrome.storage.sync',

        privacy_li5: 'License Key ä¸ææç¶æä¿å­å¨ chrome.storage.sync',

        privacy_li6: 'ä½¿ç¨æ¬¡æ°ä¿å­å?chrome.storage.local',

        privacy_p3b: 'å¯¼åºçæä»¶ä»ä¿å­å¨æ¬å°è®¾å¤ï¼æä»¬ä¸ä¼ä¿å­æä¸ä¼ ã?,

        privacy_h4: '4. ?????',

        privacy_p4: 'æ¿æ´?License æ¶ä¼åé?License Key ä¸æ¬å°å®ä¾æ è¯å° Cloudflare Workersï¼å¹¶è½¬åç»?Creem è¿è¡éªè¯ï¼ä¸ä¼ä¸ä¼ å¯¹è¯åå®¹ã?,

        privacy_h5: '5. ???????',

        privacy_p5: 'ç½ç»è¯·æ±ä»åå?chatgpt.com / chat.openai.com / *.oaiusercontent.com ä»¥å License éªè¯æå¡ï¼ææè¯·æ±åéè¿ HTTPS åéã?,

        privacy_h6: '6. Limited Use',

        privacy_p6: 'æä»¬éµå® Chrome Web Store User Data Policyï¼åæ?Limited Use è¦æ±ã?,

        privacy_h7: '7. ????',

        privacy_p7: 'èç³»é®ç®±ï¼?,

        terms_title: 'æå¡æ¡æ¬¾',

        terms_date: 'æåæ´æ°ï¼2026å¹?æ?2æ?,

        terms_h1: '1. æå¡æ¦è¿°',

        terms_p1: 'ChatShell ????? ChatGPT ????????????????????????',

        terms_h2: '2. ä½¿ç¨è®¸å¯',

        terms_li1: '??????????????',

        terms_li2: '????????????????????',

        terms_h3: '3. ç¨æ·è´£ä»»',

        terms_p3: 'æ¨åæï¼',

        terms_li3: 'ä»å°æ¬æ©å±ç¨äºåæ³ç®ç?,

        terms_li4: 'ä¸åäº«æè½¬å®æ¨ç License Key',

        terms_li5: 'ä¸å°è¯ç»è¿ä»è´¹åè½éå?,

        terms_li6: 'éµå® ChatGPT çä½¿ç¨æ¡æ¬?,

        terms_h4: '4. åè´£å£°æ',

        terms_li7: 'æ¬æ©å±æâç°ç¶âæä¾ï¼ä¸æä¾ä»»ä½æç¤ºææç¤ºçä¿è¯?,

        terms_li8: 'æä»¬ä¸å¯¹å¯¼åºåå®¹çåç¡®æ§æå®æ´æ§è´è´?,

        terms_li9: 'æä»¬ä¸å¯¹å ä½¿ç¨æ¬æ©å±é æçä»»ä½æå¤±è´è´?,

        terms_li10: 'æ¬æ©å±ä¸ OpenAI æ?ChatGPT æ å³è?,

        terms_h5: '5. éæ¬¾æ¿ç­?,

        terms_p5: 'License æªæ¿æ´»å¯éæ¬¾ï¼ä¸æ¦æ¿æ´»å³ä¸æ¯æéæ¬¾ãè®¢éå¯éæ¶å¨æ¯ä»å¹³å°åæ¶ï¼å½åå¨æä»å¯ç¨ãè¥æ¯ä»å¹³å°æå½å°æ³å¾ææ´é«è¦æ±ï¼ä»¥å¶ä¸ºåã?,

        terms_h6: '6. æ¡æ¬¾åæ´',

        terms_p6: '??????????????????????',

        terms_h7: '7. èç³»æ¹å¼',

        terms_p7: 'å¼åèï¼SCFï¼èç³»é®ç®±ï¼',

        lang_btn: 'En',



        // FAQ & Feedback

        faq_title: 'å¸¸è§é®é¢',

        faq_1_q: 'æ°æ®å­å¨å¨åªéï¼',

        faq_1_a: 'ææå¯¹è¯æ°æ®ä»ä¿å­å¨æ¨çæ¬å°æµè§å¨ä¸­ãæä»¬æ æ³è®¿é®ãæ¥çæå­å¨æ¨çä»»ä½æ°æ®ã?,

        faq_2_q: 'å¦ä½æ¿æ´»ä»è´¹çæ¬ï¼',

        faq_2_a: 'è®¢éåæ¨å°æ¶å°ä¸ä¸?License Keyãå¨æä»¶çâè´¦æ·âé¡µé¢è¾å¥è¯¥ Key å³å¯æ¿æ´»ã?,

        faq_3_q: 'æ¯æåªäºæµè§å¨ï¼',

        faq_3_a: 'æ¯æææåºäº?Chromium åæ ¸çæµè§å¨ï¼å¦ Chrome, Edge, Brave, Arc ç­ã?,

        faq_4_q: 'æ¯æåªäºå¯¼åºæ ¼å¼ï¼?,

        faq_4_a: 'åå¯¹è¯å¯¼åºæ¯æ?PDFãMarkdownãDOCXãJSONï¼æ¹éå¯¼åºæ¯æ?HTMLãMarkdownãDOCXãJSONã?,

        faq_5_q: 'è®¢éå¯ä»¥å¨å¤å°è®¾å¤ä¸ä½¿ç¨åï¼',

        faq_5_a: 'å¯ä»¥ãLicense Key ä¼éè¿æµè§å¨åæ­¥ï¼æ¨å¯ä»¥å¨å¤å°è®¾å¤ä¸ä½¿ç¨åä¸ä¸ªè®¢éã?,



        feedback_title: 'é®é¢åé¦',

        feedback_desc: 'éå°é®é¢ææåè½å»ºè®®ï¼æ¬¢è¿éæ¶èç³»æä»¬ãæä»¬ä¼è®¤çéè¯»æ¯ä¸æ¡åé¦ã?,

        feedback_email_label: 'åéé®ä»¶è³ï¼?,

        feedback_action_email: 'åéé®ä»?,

        feedback_action_issue: 'æäº¤ GitHub Issue'

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

        feature_1_desc: 'Export to PDF, Markdown, DOCX, HTML, JSON, and more â?clean and readable outputs.',

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

        pricing_free_watermark: 'â?With watermark',

        pricing_free_nobatch: 'â?Batch export & Team space',

        pricing_std_1: 'â?Unlimited exports Â· No watermark',

        pricing_std_2: 'â?Timestamps & Remove separators',

        pricing_std_3: 'â?All formats',

        pricing_std_nobatch: 'â?Batch export & Team space',

        pricing_pro_1: 'â?All Standard features',

        pricing_pro_2: 'â?Batch export & Team space',

        pricing_pro_3: 'â?Backup report reminders (coming soon)',

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

        lang_btn: 'ä¸?,



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

    CNY: 'Â¥'

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
    await loadExchangeRate();
    updatePricingUI();
}

function loadExchangeRate() {
    return new Promise((resolve) => {
        const controller = new AbortController();
        const timer = setTimeout(() => {
            controller.abort();
            resolve();
        }, 4000);
        fetch('https://api.frankfurter.dev/latest?from=USD&to=CNY', { signal: controller.signal })
            .then((response) => response.ok ? response.json() : null)
            .then((data) => {
                clearTimeout(timer);
                if (data && data.rates && typeof data.rates.CNY === 'number') {
                    exchangeRateCny = data.rates.CNY;
                }
                resolve();
            })
            .catch(() => {
                clearTimeout(timer);
                resolve();
            });
    });
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

        setText('pricing_std_year', `å¹´ä» ${formatCurrency(stdYear, currency)}ï¼ç ${formatCurrency(stdSave, currency)}ï¼`);

        setText('pricing_pro_year', `å¹´ä» ${formatCurrency(proYear, currency)}ï¼ç ${formatCurrency(proSave, currency)}ï¼`);

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

