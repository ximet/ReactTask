import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`assets/locales/${language}/${namespace}.json`)
        .then((resources) => callback(null, resources))
        .catch((error) => callback(error, null));
    }),
  )
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en'],
    keySeparator: false,
    ns: ['login', 'common'],
    defaultNS: 'common',
    updateMissing: true,
    interpolation: { escapeValue: false },
  });
