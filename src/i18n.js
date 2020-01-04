import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          // StartScreen
          'Salsa or Bachata?': 'Salsa or Bachata?',
          'Play!': 'Play!',

          // OptionsModal
          Options: 'Options',
          'Choose Genres': 'Choose Genres',
          Done: 'Done',

          // GameOverScreen
          correct: 'Correct! :D',
          wrong: 'Wrong :(',
          answerFeedback: '(It was a {{genre}} song)',
          'Play Again!': 'Play Again!',

          // PlayScreen
          'What type of song is playing?': 'What type of song is playing?',
        },
      },
      es: {
        translations: {
          'Salsa or Bachata?': 'Salsa o Bachata?',
          'Play!': 'Jugar!',

          Options: 'Opciones',
          'Choose Genres': 'Eligir Géneros',
          Done: 'Listo',

          correct: '¡Correcto :D!',
          wrong: 'Incorrecto :(',
          answerFeedback: '(Fue un canción de {{genre}})',
          'Play Again!': 'Otra Vez!',
          'What type of song is playing?': '¿Qué tipo de canción se está tocando?',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
