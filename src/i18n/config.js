import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const app = {};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: require('./locales/en.json')
    },
    fi: {
      translations: require('./locales/fi.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'fi'];

i18n.on('handleLangChange', (lng) => {
  app.view.render();
});

export default i18n;