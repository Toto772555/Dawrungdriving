(() => {
    const storageKey = 'cookie-consent';
    const text = {
        th: {
            title: 'เว็บไซต์นี้ใช้คุกกี้',
            body: 'เราใช้คุกกี้เพื่อให้เว็บไซต์ทำงานได้อย่างถูกต้อง และเพื่อวิเคราะห์การเข้าชมเพื่อปรับปรุงบริการ คุณสามารถเลือกยอมรับหรือปฏิเสธคุกกี้ที่ไม่จำเป็นได้ และเปลี่ยนการตั้งค่าได้ตลอดเวลา',
            accept: 'ยอมรับทั้งหมด',
            decline: 'ปฏิเสธ',
            settings: 'ตั้งค่าคุกกี้',
        },
        en: {
            title: 'This website uses cookies',
            body: 'We use cookies to keep the website working properly and to understand how visitors use it so we can improve our service. You can accept or decline non-essential cookies and change your choice at any time.',
            accept: 'Accept all',
            decline: 'Decline',
            settings: 'Cookie settings',
        },
        ru: {
            title: 'Этот сайт использует файлы cookie',
            body: 'Мы используем файлы cookie для корректной работы сайта и анализа посещаемости, чтобы улучшать наш сервис. Вы можете принять или отклонить необязательные файлы cookie и изменить свой выбор в любое время.',
            accept: 'Принять все',
            decline: 'Отклонить',
            settings: 'Настройки cookie',
        },
        zh: {
            title: '本网站使用 Cookie',
            body: '我们使用 Cookie 以确保网站正常运行，并分析访问情况以改进服务。您可以接受或拒绝非必要 Cookie，并可随时更改您的选择。',
            accept: '全部接受',
            decline: '拒绝',
            settings: 'Cookie 设置',
        },
    };

    const readConsent = () => {
        try {
            return localStorage.getItem(storageKey);
        } catch {
            return null;
        }
    };

    const banner = document.createElement('section');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cookie-banner-title');
    banner.setAttribute('aria-describedby', 'cookie-banner-body');
    banner.hidden = true;
    banner.innerHTML = `
        <div class="cookie-banner-copy">
            <h2 id="cookie-banner-title"></h2>
            <p id="cookie-banner-body"></p>
        </div>
        <div class="cookie-banner-actions">
            <button type="button" class="cookie-decline"></button>
            <button type="button" class="cookie-accept"></button>
        </div>`;

    const settingsButton = document.createElement('button');
    settingsButton.type = 'button';
    settingsButton.className = 'cookie-settings-link';

    const render = () => {
        const strings = text[document.documentElement.lang] || text.th;
        banner.querySelector('#cookie-banner-title').textContent = strings.title;
        banner.querySelector('#cookie-banner-body').textContent = strings.body;
        banner.querySelector('.cookie-accept').textContent = strings.accept;
        banner.querySelector('.cookie-decline').textContent = strings.decline;
        settingsButton.textContent = strings.settings;
    };

    // Other scripts (e.g. analytics) can check window.cookieConsent or listen for "cookieconsentchange".
    const saveConsent = (value) => {
        try {
            localStorage.setItem(storageKey, value);
        } catch {}
        window.cookieConsent = value;
        banner.hidden = true;
        document.dispatchEvent(new CustomEvent('cookieconsentchange', { detail: value }));
        settingsButton.focus();
    };

    banner.querySelector('.cookie-accept').addEventListener('click', () => saveConsent('accepted'));
    banner.querySelector('.cookie-decline').addEventListener('click', () => saveConsent('declined'));
    settingsButton.addEventListener('click', () => {
        banner.hidden = false;
        banner.querySelector('.cookie-accept').focus();
    });

    render();
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    document.body.append(banner);
    (document.querySelector('footer') || document.body).append(settingsButton);

    window.cookieConsent = readConsent();
    if (!window.cookieConsent) banner.hidden = false;
})();
