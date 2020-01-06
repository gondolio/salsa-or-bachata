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
          // Common
          Salsa: 'Salsa',
          Bachata: 'Bachata',
          Merengue: 'Merengue',
          Kizomba: 'Kizomba',
          Reggaeton: 'Reggaeton',

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
          Salsa: 'Salsa',
          Bachata: 'Bachata',
          Merengue: 'Merengue',
          Kizomba: 'Kizomba',
          Reggaeton: 'Reggaetón',

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
      jp: {
        translations: {
          Salsa: 'サルサ',
          Bachata: 'バチャータ',
          Merengue: 'メレンゲ',
          Kizomba: 'キゾンバ', // check this
          Reggaeton: 'レゲトン', // check this

          'Salsa or Bachata?': 'サルサか、バチャータか？',
          'Play!': '遊ぶ!',

          Options: 'オプション',
          'Choose Genres': 'ジャンルを選ぶ',
          Done: 'オッケー',

          correct: 'あった！（╹◡╹）',
          wrong: 'あってない　(◞‸◟)',
          answerFeedback: '({{genre}}の曲でした)',
          'Play Again!': 'もう一度!',
          'What type of song is playing?': 'どんなジャンルの曲が流れていますか？',
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
