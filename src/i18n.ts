import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Todo App',
      add_todo: 'Add Todo',
    },
  },
  cz: {
    translation: {
      welcome: 'Vítejte v Todo App',
      add_todo: 'Přidat úkol',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
