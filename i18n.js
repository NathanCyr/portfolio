import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import NextI18NextConfig from './next-i18next.config';
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';

i18n.use(HttpApi).use(LanguageDetector).use(initReactI18next).init({
    ...NextI18NextConfig,
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    lng: 'fr',
    fallbacklng: 'fr',
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false,
    },
    debug: true,
});

export default i18n;