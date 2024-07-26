import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import NextI18NextConfig from './next-i18next.config';
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';

if(!i18n.isInitialized){
    i18n.use(HttpApi).use(LanguageDetector).use(initReactI18next).init({
        ...NextI18NextConfig,
        lng: 'fr',
        fallbackLng: 'fr',
        defaultNS: 'translation',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        debug: true,
    });

}



export default i18n;