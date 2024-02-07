import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .init({
    lng: 'gr', // Initial language
    ns: ['app'], // Your namespaces
    defaultNS: 'app',
    fallbackLng: 'gr',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;