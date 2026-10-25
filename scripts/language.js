(() => {
    const isHome = Boolean(document.querySelector('.hero-slide'));
    const original = new Map();
    const english = [
        ['.brand span', ['Dawrung Driving School', 'Dawrung Driving School']],
    ];

    if (isHome) {
        english.push(
            ['.links a', ['Home', 'Courses', 'Practice Test', 'About Us', 'Reviews', 'Contact']],
            ['.phone small', ['Open daily, 9:00 AM–5:00 PM']],
            ['.title p', ['Courses designed for you', 'What our students say']],
            ['.title h2', ['Our Courses', 'Student Reviews']],
            ['.featured-course h3', ['Learn to drive with confidence']],
            ['.featured-course p', ['Learn to drive <b>10 + 5 hours</b><br>Our 10 + 5 hour course costs ฿5,500 and includes help obtaining your license at the Phuket Transport Office. We welcome Thai and international students. (School-based test)']],
            ['.featured-course strong', ['Course fee <b>฿5,500</b>']],
            ['.featured-course a', ['Ask a question / Enroll']],
            ['.practice-content .kicker', ['Get ready for your test']],
            ['#practice-title', ['Try a driving license practice test']],
            ['.practice-content > p:not(.kicker)', ['Practice on your own to review the rules of the road and get ready for your driving test.']],
            ['.practice-action a', ['Start the practice test <span aria-hidden="true">↗</span>']],
            ['#practice-link-note', ['Opens the practice test in a new Claude tab']],
            ['.video p', ['Watch our school introduction']],
            ['.whygrid > div:nth-child(2) .kicker', ['Dawrung Driving School']],
            ['.whygrid > div:nth-child(2) h2', ['Why choose us?']],
            ['.whygrid > div:nth-child(2) li', ['Professional, friendly instructors who care about every student', 'Training follows Department of Land Transport standards', 'Modern, safe vehicles with insurance for every student', 'Guidance at every step, through your driving test', 'Pickup and drop-off service in selected areas']],
            ['.stats span', ['Learners trained <b>5,000+</b><small>students</small>', 'Successful tests <b>4,000+</b><small>students</small>']],
            ['.review-selection', ['Selected 5-star Google reviews · English reviews translated and summarized in Thai']],
            ['.selected-reviews blockquote', ['I had no driving experience and was nervous, but my instructor was kind and patient. I never felt pressured, and the lessons were enjoyable.', 'I had never driven before and was very nervous. The instructor’s patience helped me learn quickly. Nui, the school manager, is kind, professional, and always ready to help. Highly recommend this school.', 'I’m very happy I studied here. The instructors helped me refresh my driving skills, explained everything clearly, and speak English well. I recommend this school.', 'A great school with a straightforward process. Everything went smoothly. I recommend it to anyone in Phuket looking for a Category A license.']],
            ['.selected-reviews article > p', ['I had never driven before and was very nervous. The instructor’s patience helped me learn quickly. Nui, the school manager, is kind, professional, and always ready to help. Highly recommend this school.', 'I’m very happy I studied here. The instructors helped me refresh my driving skills, explained everything clearly, and speak English well. I recommend this school.', 'A great school with a straightforward process. Everything went smoothly. I recommend it to anyone in Phuket looking for a Category A license.']],
            ['.selected-reviews small', ['Google review · Original text', 'Google review · Translated and summarized from English', 'Google review · Translated and summarized from English', 'Google review · Translated and summarized from English']],
            ['#customer-gallery-title', ['Student reviews and photos']],
            ['#customer-gallery-note', ['Thank you for choosing us. Select a photo to view it full size.']],
            ['.google-reviews h3', ['Read student reviews on Google']],
            ['.google-reviews p', ['See reviews and ratings for Dawrung Driving School before you enroll.']],
            ['.google-reviews a', ['Read Google reviews']],
            ['#reviews-link-note', ['Opens reviews in a new tab']],
            ['.cta h2', ['Free consultation! Let’s plan your lessons']],
            ['.cta p', ['Our team is ready to help you plan lessons that fit your needs.']],
            ['footer section:nth-child(1) p', ['A certified driving school<br>Real road training and support at every step']],
            ['footer section:nth-child(2) h3', ['Main Menu']],
            ['footer section:nth-child(2) a', ['Home', 'About Us', 'Student Reviews', 'Practice Test']],
            ['footer section:nth-child(3) h3', ['Courses']],
            ['footer section:nth-child(3) a', ['Learn to drive · 15 hours']],
            ['footer section:nth-child(4) h3', ['Contact Us']],
            ['.gallery-viewer-close', ['Close ×']],
            ['.gallery-viewer-prev', ['← Previous']],
            ['.gallery-viewer-next', ['Next →']],
            ['footer > small', ['© 2026 Dawrung Driving School. All rights reserved.']],
        );
    } else {
        english.push(
            ['.navbar-nav .nav-link:not(.language-toggle)', ['Home', 'Gallery', 'Contact']],
            ['.navbar-brand span', ['Dawrung Driving School']],
            ['h1', [document.querySelector('h1')?.textContent.trim().toLowerCase() === 'gallery' ? 'Gallery' : 'Contact Us']],
            ['.carousel-caption h5', ['Dawrung Driving School', 'Dawrung Driving School', 'Dawrung Driving School']],
            ['.carousel-caption p', ['Learn on real roads and get your license quickly. We welcome Thai and international students.', 'Feel confident on every road. Learn by doing, pass your test, and get your license sooner.', 'Professional driving lessons on real roads, with a clear path to your license.']],
            ['.visually-hidden', ['Previous', 'Next']],
            ['.text-body-secondary', ['© 2026 Dawrung Driving School']],
        );
    }

    const russian = isHome ? [
        ['.brand span', ['Автошкола Dawrung', 'Автошкола Dawrung']],
        ['.links a', ['Главная', 'Курсы', 'Пробный тест', 'О нас', 'Отзывы', 'Контакты']],
        ['.phone small', ['Ежедневно, 9:00–17:00']],
        ['.title p', ['Курсы для вас', 'Отзывы учеников']],
        ['.title h2', ['Наши курсы', 'Отзывы учеников']],
        ['.featured-course h3', ['Научитесь уверенно водить']],
        ['.featured-course p', ['Обучение вождению <b>10 + 5 часов</b><br>Курс длительностью 10 + 5 часов стоит 5 500 бат. Мы поможем получить водительское удостоверение в транспортном управлении Пхукета. Принимаем граждан Таиланда и иностранцев. (Экзамен в школе)']],
        ['.featured-course strong', ['Стоимость курса <b>5 500 бат</b>']],
        ['.featured-course a', ['Задать вопрос / Записаться']],
        ['.practice-content .kicker', ['Подготовьтесь к экзамену']],
        ['#practice-title', ['Пробный тест на водительские права']],
        ['.practice-content > p:not(.kicker)', ['Пройдите пробный тест самостоятельно, повторите правила дорожного движения и подготовьтесь к экзамену на водительские права.']],
        ['.practice-action a', ['Начать тест <span aria-hidden="true">↗</span>']],
        ['#practice-link-note', ['Тест откроется в новой вкладке Claude']],
        ['.video p', ['Посмотрите видео о нашей школе']],
        ['.whygrid > div:nth-child(2) .kicker', ['Автошкола Dawrung']],
        ['.whygrid > div:nth-child(2) h2', ['Почему выбирают нас?']],
        ['.whygrid > div:nth-child(2) li', ['Опытные и доброжелательные инструкторы внимательно относятся к каждому ученику', 'Обучение соответствует стандартам Департамента наземного транспорта', 'Современные и безопасные автомобили, застрахованные для каждого ученика', 'Помощь на каждом этапе до сдачи экзамена', 'Трансфер в определённых районах']],
        ['.stats span', ['Обучено учеников <b>5 000+</b><small>человек</small>', 'Успешно сдали экзамен <b>4 000+</b><small>человек</small>']],
        ['.review-selection', ['Избранные отзывы Google с оценкой 5 звёзд · отзывы на английском переведены и кратко изложены на тайском']],
        ['.selected-reviews blockquote', ['У меня не было опыта вождения, и я очень нервничала. Инструктор был добрым и терпеливым. Уроки проходили спокойно и интересно.', 'Я никогда раньше не водила и сильно переживала, но терпение инструктора помогло мне быстро научиться. Нуй, менеджер школы, добрая и профессиональная, всегда готова помочь. Очень рекомендую эту школу.', 'Очень рад, что учился здесь. Инструкторы помогли восстановить навыки вождения, всё понятно объясняли и хорошо говорят по-английски. Рекомендую эту школу.', 'Отличная школа, понятный процесс, всё прошло хорошо. Рекомендую тем, кто ищет на Пхукете школу для получения прав категории A.']],
        ['.selected-reviews article > p', ['Я никогда раньше не водила и сильно переживала, но терпение инструктора помогло мне быстро научиться. Нуй, менеджер школы, добрая и профессиональная, всегда готова помочь. Очень рекомендую эту школу.', 'Очень рад, что учился здесь. Инструкторы помогли восстановить навыки вождения, всё понятно объясняли и хорошо говорят по-английски. Рекомендую эту школу.', 'Отличная школа, понятный процесс, всё прошло хорошо. Рекомендую тем, кто ищет на Пхукете школу для получения прав категории A.']],
        ['.selected-reviews small', ['Отзыв Google · Оригинальный текст', 'Отзыв Google · Перевод и краткое изложение', 'Отзыв Google · Перевод и краткое изложение', 'Отзыв Google · Перевод и краткое изложение']],
        ['#customer-gallery-title', ['Отзывы и фотографии учеников']],
        ['#customer-gallery-note', ['Спасибо, что выбрали нас. Нажмите на фото, чтобы открыть его полностью.']],
        ['.google-reviews h3', ['Читайте отзывы учеников в Google']],
        ['.google-reviews p', ['Ознакомьтесь с отзывами и оценками автошколы Dawrung перед записью.']],
        ['.google-reviews a', ['Читать отзывы в Google']],
        ['#reviews-link-note', ['Отзывы откроются в новой вкладке']],
        ['.cta h2', ['Бесплатная консультация! Составим план обучения']],
        ['.cta p', ['Наша команда поможет подобрать удобный план обучения.']],
        ['footer section:nth-child(1) p', ['Аккредитованная автошкола<br>Практика на реальных дорогах и помощь на каждом этапе']],
        ['footer section:nth-child(2) h3', ['Главное меню']],
        ['footer section:nth-child(2) a', ['Главная', 'О нас', 'Отзывы учеников', 'Пробный тест']],
        ['footer section:nth-child(3) h3', ['Курсы']],
        ['footer section:nth-child(3) a', ['Курс вождения · 15 часов']],
        ['footer section:nth-child(4) h3', ['Контакты']],
        ['.gallery-viewer-close', ['Закрыть ×']],
        ['.gallery-viewer-prev', ['← Назад']],
        ['.gallery-viewer-next', ['Далее →']],
        ['footer > small', ['© 2026 Автошкола Dawrung. Все права защищены.']],
    ] : [
        ['.brand span', ['Автошкола Dawrung']],
        ['.navbar-brand span', ['Автошкола Dawrung']],
        ['.navbar-nav .nav-link:not(.language-toggle)', ['Главная', 'Галерея', 'Контакты']],
        ['h1', [location.pathname.toLowerCase().includes('gallery') ? 'Галерея' : 'Контакты']],
        ['.carousel-caption h5', ['Автошкола Dawrung', 'Автошкола Dawrung', 'Автошкола Dawrung']],
        ['.carousel-caption p', ['Учитесь водить на реальных дорогах и быстрее получайте права. Принимаем граждан Таиланда и иностранцев.', 'Уверенность на любой дороге. Практика, экзамен и водительское удостоверение.', 'Профессиональное обучение вождению на реальных дорогах и помощь в получении прав.']],
        ['.visually-hidden', ['Назад', 'Далее']],
        ['.text-body-secondary', ['© 2026 Автошкола Dawrung']],
    ];
    const chinese = isHome ? [
        ['.brand span', ['Dawrung 驾校', 'Dawrung 驾校']],
        ['.links a', ['首页', '课程', '模拟考试', '关于我们', '学员评价', '联系我们']],
        ['.phone small', ['每日营业，9:00–17:00']],
        ['.title p', ['为您设计的课程', '学员评价']],
        ['.title h2', ['我们的课程', '学员评价']],
        ['.featured-course h3', ['自信开启驾驶学习']],
        ['.featured-course p', ['驾驶课程 <b>10 + 5 小时</b><br>10 + 5 小时课程费用为 5,500 泰铢，并协助您在普吉岛陆路运输局办理驾照。欢迎泰国及国际学员。（校内考试）']],
        ['.featured-course strong', ['课程费用 <b>5,500 泰铢</b>']],
        ['.featured-course a', ['咨询 / 报名']],
        ['.practice-content .kicker', ['为考试做好准备']],
        ['#practice-title', ['驾照理论模拟考试']],
        ['.practice-content > p:not(.kicker)', ['您可以自行练习模拟题，复习交通规则，为驾照考试做好准备。']],
        ['.practice-action a', ['开始模拟考试 <span aria-hidden="true">↗</span>']],
        ['#practice-link-note', ['模拟考试将在新的 Claude 标签页打开']],
        ['.video p', ['观看驾校介绍视频']],
        ['.whygrid > div:nth-child(2) .kicker', ['Dawrung 驾校']],
        ['.whygrid > div:nth-child(2) h2', ['为什么选择我们？']],
        ['.whygrid > div:nth-child(2) li', ['专业、友善的教练，认真关注每位学员', '课程符合陆路运输局标准', '现代安全车辆，为每位学员提供保险', '全程提供指导，助您通过驾驶考试', '指定区域提供接送服务']],
        ['.stats span', ['已培训学员 <b>5,000+</b><small>人</small>', '成功通过考试 <b>4,000+</b><small>人</small>']],
        ['.review-selection', ['精选 Google 五星评价 · 英文评价已翻译并概述为泰文']],
        ['.selected-reviews blockquote', ['我没有驾驶经验，也很紧张，但教练友善又耐心。学习过程中没有压力，课程也很愉快。', '我以前从未开过车，刚开始很紧张，但教练耐心指导，让我很快学会。学校经理 Nui 友善、专业，总是乐于帮助学员。强烈推荐这所驾校。', '很高兴在这里学习。教练帮助我复习驾驶技巧，讲解清晰，也能很好地说英语。推荐这所驾校。', '这是一所很棒的驾校，流程简单顺利。推荐给在普吉岛寻找 A 类驾照培训的学员。']],
        ['.selected-reviews article > p', ['我以前从未开过车，刚开始很紧张，但教练耐心指导，让我很快学会。学校经理 Nui 友善、专业，总是乐于帮助学员。强烈推荐这所驾校。', '很高兴在这里学习。教练帮助我复习驾驶技巧，讲解清晰，也能很好地说英语。推荐这所驾校。', '这是一所很棒的驾校，流程简单顺利。推荐给在普吉岛寻找 A 类驾照培训的学员。']],
        ['.selected-reviews small', ['Google 评价 · 原文', 'Google 评价 · 英文翻译与概述', 'Google 评价 · 英文翻译与概述', 'Google 评价 · 英文翻译与概述']],
        ['#customer-gallery-title', ['学员评价与照片']],
        ['#customer-gallery-note', ['感谢您选择我们。点击照片可查看大图。']],
        ['.google-reviews h3', ['在 Google 查看学员评价']],
        ['.google-reviews p', ['报名前查看 Dawrung 驾校的评价和评分。']],
        ['.google-reviews a', ['查看 Google 评价']],
        ['#reviews-link-note', ['评价将在新标签页打开']],
        ['.cta h2', ['免费咨询！为您规划学习课程']],
        ['.cta p', ['我们的团队随时为您提供建议并规划适合您的课程。']],
        ['footer section:nth-child(1) p', ['正规驾驶培训学校<br>真实道路练习，全程提供支持']],
        ['footer section:nth-child(2) h3', ['主菜单']],
        ['footer section:nth-child(2) a', ['首页', '关于我们', '学员评价', '模拟考试']],
        ['footer section:nth-child(3) h3', ['课程']],
        ['footer section:nth-child(3) a', ['学会驾驶课程 · 15 小时']],
        ['footer section:nth-child(4) h3', ['联系我们']],
        ['.gallery-viewer-close', ['关闭 ×']],
        ['.gallery-viewer-prev', ['← 上一张']],
        ['.gallery-viewer-next', ['下一张 →']],
        ['footer > small', ['© 2026 Dawrung 驾校。版权所有。']],
    ] : [
        ['.brand span', ['Dawrung 驾校']],
        ['.navbar-brand span', ['Dawrung 驾校']],
        ['.navbar-nav .nav-link:not(.language-toggle)', ['首页', '图片集', '联系我们']],
        ['h1', [location.pathname.toLowerCase().includes('gallery') ? '图片集' : '联系我们']],
        ['.carousel-caption h5', ['Dawrung 驾校', 'Dawrung 驾校', 'Dawrung 驾校']],
        ['.carousel-caption p', ['在真实道路上学习驾驶，快速取得驾照。欢迎泰国及国际学员。', '自信应对每一段旅程。认真练习、参加考试，更快取得驾照。', '专业驾驶培训，在真实道路上练习，并协助您取得驾照。']],
        ['.visually-hidden', ['上一张', '下一张']],
        ['.text-body-secondary', ['© 2026 Dawrung 驾校']],
    ];
    for (const [selector, values] of english) {
        document.querySelectorAll(selector).forEach((element, index) => {
            if (!original.has(element)) original.set(element, element.innerHTML);
            element.dataset.english = values[index] ?? values[values.length - 1];
        });
    }

    for (const [languageCode, entries] of Object.entries({ ru: russian, zh: chinese })) {
        for (const [selector, values] of entries) {
            document.querySelectorAll(selector).forEach((element, index) => {
                element.dataset[languageCode] = values[index] ?? values[values.length - 1];
            });
        }
    }

    if (!isHome) {
        const heading = document.querySelector('h1');
        if (heading) original.set(heading, location.pathname.toLowerCase().includes('gallery') ? 'รูปภาพแกลเลอรี' : 'ติดต่อเรา');
    }

    const languageOptions = [...document.querySelectorAll('.language-option')];
    let language = localStorage.getItem('site-language') || 'th';
    const applyLanguage = (next) => {
        language = next;
        document.documentElement.lang = language;
        const page = location.pathname.toLowerCase().includes('gallery') ? 'gallery' : 'contact';
        const titles = {
            th: isHome ? 'ดาวรุ่งสอนขับรถยนต์' : (page === 'gallery' ? 'แกลเลอรี | ดาวรุ่งสอนขับรถยนต์' : 'ติดต่อเรา | ดาวรุ่งสอนขับรถยนต์'),
            en: isHome ? 'Dawrung Driving School' : (page === 'gallery' ? 'Gallery | Dawrung Driving School' : 'Contact | Dawrung Driving School'),
            ru: isHome ? 'Автошкола Dawrung' : (page === 'gallery' ? 'Галерея | Автошкола Dawrung' : 'Контакты | Автошкола Dawrung'),
            zh: isHome ? 'Dawrung 驾校' : (page === 'gallery' ? '图片集 | Dawrung 驾校' : '联系我们 | Dawrung 驾校'),
        };
        document.title = titles[language] || titles.th;
        document.querySelectorAll('[data-english]').forEach((element) => {
            element.innerHTML = language === 'th' ? original.get(element) : (element.dataset[language] || element.dataset.english);
        });
        const selectedOption = languageOptions.find((option) => option.dataset.language === language);
        if (selectedOption) {
            document.querySelectorAll('.language-picker').forEach((picker) => {
                picker.querySelector('.language-current-flag').src = selectedOption.querySelector('img').getAttribute('src');
                picker.querySelector('.language-current-label').textContent = selectedOption.dataset.label;
                picker.querySelector('.language-trigger').setAttribute('aria-expanded', 'false');
                picker.open = false;
            });
        }
        localStorage.setItem('site-language', language);
    };

    languageOptions.forEach((option) => option.addEventListener('click', () => applyLanguage(option.dataset.language)));
    document.querySelectorAll('.language-picker').forEach((picker) => {
        picker.addEventListener('toggle', () => {
            picker.querySelector('.language-trigger').setAttribute('aria-expanded', String(picker.open));
        });
    });
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.language-picker')) {
            document.querySelectorAll('.language-picker').forEach((picker) => {
                picker.open = false;
                picker.querySelector('.language-trigger').setAttribute('aria-expanded', 'false');
            });
        }
    });
    applyLanguage(language);
})();
