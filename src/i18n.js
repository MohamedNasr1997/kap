
import i18n from "i18next";
import {English} from "./langauge/english.js";
import {Arabic} from "./langauge/arabic.js";

import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


const  resources= {
    en: {
      translation: English
    },
    ar: {
        translation: Arabic
      }
  };

  i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
 // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar",
debug:true,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n