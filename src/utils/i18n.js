import { initReactI18next } from "react-i18next"
import i18n from "i18next"
import translationEng from "../locales/en/translation.json"
import translationFr from "../locales/fr/translation.json"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translations: translationEng,
  },
  fr: {
    translations: translationFr,
  },
}
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: { order: ["navigator"] },
    resources,
    lng: "fr",
    fallbackLng: "en",
    keySeparator: false,
    lowerCaseLng: true,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
