import enNotFound from "../../i18n/locales/en/404.json";
import enContactForm from "../../i18n/locales/en/contactForm.json";
import enHome from "../../i18n/locales/en/home.json";
import enNavigation from "../../i18n/locales/en/navigation.json";
import enProjectItem from "../../i18n/locales/en/projectItem.json";
import enSeo from "../../i18n/locales/en/seo.json";
import frNotFound from "../../i18n/locales/fr/404.json";
import frContactForm from "../../i18n/locales/fr/contactForm.json";
import frHome from "../../i18n/locales/fr/home.json";
import frNavigation from "../../i18n/locales/fr/navigation.json";
import frProjectItem from "../../i18n/locales/fr/projectItem.json";
import frSeo from "../../i18n/locales/fr/seo.json";

const translations = {
  fr: {
    404: frNotFound,
    home: frHome,
    navigation: frNavigation,
    contactForm: frContactForm,
    projectItem: frProjectItem,
    seo: frSeo,
  },
  en: {
    404: enNotFound,
    home: enHome,
    navigation: enNavigation,
    contactForm: enContactForm,
    projectItem: enProjectItem,
    seo: enSeo,
  },
};

export const locales = ["fr", "en"];

export function getLocale(value) {
  return locales.includes(value) ? value : "fr";
}

export function t(locale, key, params = {}) {
  const [namespace, name] = key.includes(":") ? key.split(":") : ["home", key];
  const value = translations[locale]?.[namespace]?.[name] ?? key;

  return Object.entries(params).reduce(
    (text, [param, replacement]) =>
      text.replaceAll(`{{${param}}}`, replacement),
    value
  );
}

export function getCvPath(locale) {
  return locale === "en"
    ? "/cv/CV-Patrick-Sheron-MOUCLE-Developer-web-mobile-en.pdf"
    : "/cv/CV-MOUCLE-PATRICK-developpeur-fullstack-alternance-fr.pdf";
}
