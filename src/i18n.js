import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      // English first as it is the fallback language
      // Everything else in ABC order
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
      he: {
        translations: {
          // Common
          Salsa: 'סלסה',
          Bachata: "באצ'תה",
          Merengue: 'מרנגה',
          Kizomba: 'קיזומבה', // check this
          Reggaeton: 'רגאייטון', // check this

          // StartScreen
          'Salsa or Bachata?': "?סלסה או באצ'תה",
          'Play!': '!שחק',

          // OptionsModal
          Options: 'אפשרויות',
          'Choose Genres': "בחר ז'אנרים",
          Done: 'סיום',

          // GameOverScreen
          correct: '(: !נכון',
          wrong: '): !לא נכון',
          answerFeedback: '(זה היה שיר {{genre}})',
          'Play Again!': '!שחק שוב',

          // PlayScreen
          'What type of song is playing?': '?איזה סוג של שיר מנגן',
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
      zhs: {
        translations: {
          Salsa: '莎莎',
          Bachata: '吧差他', // fix
          Merengue: '嚒人歌', // fix
          Kizomba: '恪遵吧', // fix
          Reggaeton: '热噶吨', // fix

          'Salsa or Bachata?': '莎莎还是吧差他?',
          'Play!': '开始!',

          Options: '选择', // fix
          'Choose Genres': '选择体裁', // fix
          Done: '继续',

          correct: '没错 :D!',
          wrong: '错了 :(',
          answerFeedback: '(是{{genre}}的歌)',
          'Play Again!': '再玩!',
          'What type of song is playing?': '这是什么体裁的歌?',
        },
      },
      zht: {
        translations: {
          Salsa: '莎莎',
          Bachata: '吧差他', // fix
          Merengue: '嚒人歌', // fix
          Kizomba: '恪遵吧', // fix
          Reggaeton: '热噶吨', // fix

          'Salsa or Bachata?': '莎莎還是吧差他?',
          'Play!': '開始!',

          Options: '選擇', // fix
          'Choose Genres': '選擇體裁', // fix
          Done: '繼續',

          correct: '沒錯 :D!',
          wrong: '錯了 :(',
          answerFeedback: '(是{{genre}}的歌)',
          'Play Again!': '再玩!',
          'What type of song is playing?': '這是什麼體裁的歌?',
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
