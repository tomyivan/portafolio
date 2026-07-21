import { translations, type Lang } from './translations';

const STORAGE_KEY = 'site-lang';
const EVENT_NAME = 'site-languagechange';

export type { Lang };

export function getLang(): Lang {
    if (typeof window === 'undefined') return 'es';
    return window.localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'es';
}

export function setLang(lang: Lang) {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    window.dispatchEvent(new CustomEvent<Lang>(EVENT_NAME, { detail: lang }));
}

export function onLangChange(callback: (lang: Lang) => void) {
    window.addEventListener(EVENT_NAME, (event) => {
        callback((event as CustomEvent<Lang>).detail);
    });
}

export function applyTranslations(root: ParentNode = document) {
    const lang = getLang();
    root.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        if (key && translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });
}
