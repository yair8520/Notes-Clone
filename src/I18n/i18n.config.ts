import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TranslationResources } from './TranslationResources';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: TranslationResources,
  fallbackLng: 'he',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
