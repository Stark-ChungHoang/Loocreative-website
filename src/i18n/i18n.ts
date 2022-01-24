import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import lang_ko from "../assets/translate/en.json";
import lang_en from "../assets/translate/en.json";
// import lang_cn from "./cn.json";
// import lang_jp from "./jp.json"

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    ns: ["translations"],
    defaultNS: "translations",
    debug: false,
    lng: "ko",
    fallbackLng: "ko",
    resources: {
      ko: { translations: lang_ko },
      en: { translations: lang_en },
      // cn: { translations: lang_cn },
      // jp: { translations: lang_jp },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
