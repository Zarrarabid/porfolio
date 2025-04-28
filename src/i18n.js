import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './translations/en.json'
import translationJP from './translations/jp.json'

const resources = {
  en: {
    translation: {
      ...translationEN
    }
  },
  jp: {
    translation: {
      ...translationJP

    }
  },
};

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     lng: sessionStorage.getItem("userLanguage") || "en",
//     interpolation: {
//       escapeValue: false // react already safes from xss
//     }
//   });

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // Make sure this line is included
  .init({
    resources,
    lng: sessionStorage.getItem("userLanguage") || "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


export default i18n;