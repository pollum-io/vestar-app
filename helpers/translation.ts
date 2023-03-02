import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const availableLanguages = ["en", "pt-br"];
export const defaultLocale = "en";
const LOCALE_VERSION = "1.5.1";

const determineLngFn = (code: string): string => {
  let { language } = i18next;

  if (!code || code.length === 0) {
    language = defaultLocale;

    return language;
  }

  // Full locale match
  if (availableLanguages.includes(code.toLowerCase())) {
    language = code.toLowerCase();

    return language;
  }

  // Base locale match
  const codeBase = code.split("-")[0].toLowerCase();
  if (availableLanguages.includes(codeBase)) {
    language = codeBase;

    return language;
  }

  // Fallback
  return language;
};

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `./locales/{{lng}}.json`,
      queryStringParams: { v: LOCALE_VERSION },
    },
    react: {
      useSuspense: true,
    },
    load: "languageOnly",
    lowerCaseLng: true,
    fallbackLng: determineLngFn,
    preload: [defaultLocale],
    keySeparator: ".",
    interpolation: { escapeValue: false },
  });

export default i18next;
