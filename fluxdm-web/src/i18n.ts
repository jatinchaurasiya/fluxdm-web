import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend) // Loads translations from /public/locales
    .use(LanguageDetector) // Detects browser language
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'es', 'pt', 'de'], // Supported languages
        fallbackLng: 'en', // Default if detection fails
        debug: false,
        detection: {
            // Order: Check URL first (?lng=pt), then LocalStorage (if they saved preference), then Browser
            order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
            // Cache: Save their choice to localStorage so it remembers next time
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
