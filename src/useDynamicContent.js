import { useEffect, useState } from 'react';
import i18n from './translation'; // Assuming this is your i18next configuration

const useDynamicContent = (namespace = 'app', language = 'gr') => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translations = await import(`./${namespace}/content/${language}.json`);
        i18n.addResourceBundle(language, namespace, translations.default, true, true);
        if (i18n.language !== language) {
          i18n.changeLanguage(language);
        }
        setLoaded(true);
      } catch (error) {
        console.error(`Could not load ${language} translations`, error);
      }
      return loaded;
    };

    loadTranslations();
  }, [language, namespace, loaded]);
};

export default useDynamicContent;