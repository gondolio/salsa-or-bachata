import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/enTranslations';
import esTranslations from './locales/esTranslations';
import heTranslations from './locales/heTranslations';
import jpTranslations from './locales/jpTranslations';
import { zhcnTranslations, zhhkTranslations, zhtwTranslations } from './locales/cnTranslations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: enTranslations,
      },
      es: {
        translations: esTranslations,
      },
      he: {
        translations: heTranslations,
      },
      jp: {
        translations: jpTranslations,
      },
      'zh-CN': {
        translations: zhcnTranslations,
      },
      'zh-HK': {
        translations: zhhkTranslations,
      },
      'zh-TW': {
        translations: zhtwTranslations,
      },
    },
    fallbackLng: 'en',
    debug: true,

    // Putting whitelist so only get language (e.g. 'en' instead of 'en-US')
    // Not using load: 'languageOnly' because still want to differentiate zh-CN vs zh-HK/zh-TW
    whitelist: ['en', 'es', 'he', 'jp', 'zh', 'zh-CN', 'zh-HK', 'zh-TW'],

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
