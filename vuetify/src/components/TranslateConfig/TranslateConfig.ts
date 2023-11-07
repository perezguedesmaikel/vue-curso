// i18n.js

import {createI18n} from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome!',
    greeting: 'Hello, {name}!',
  },
  es: {
    welcome: '¡Bienvenido!',
    greeting: 'Hola, {name}!',
  },
};

const i18n = createI18n({
  locale: 'en', // idioma predeterminado
  fallbackLocale: 'en',
  messages,
});

export default i18n;
