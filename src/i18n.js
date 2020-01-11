import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const traditionalChineseTranslations = {
  Salsa: '莎莎',
  Bachata: '巴恰塔',
  Merengue: '梅倫格',
  Kizomba: '基宗巴',
  Reggaeton: '雷鬼凍',

  'Salsa or Bachata?': '莎莎還是巴恰塔?',
  'Play!': '開始!',

  Options: '選項',
  'Choose Genres': '選擇類型',
  Done: '完成',

  correct: '沒錯 :D!',
  wrong: '錯了 :(',
  answerFeedback: '(是{{genre}}的歌)',
  'Play Again!': '再玩!',
  'What type of song is playing?': '這是什麼類型的歌?',
};

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
          Bachata: "בצ'אטה",
          Merengue: 'מרנגה',
          Kizomba: 'קיזומבה',
          Reggaeton: 'רגאטון',

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
          Kizomba: 'キゾンバ',
          Reggaeton: 'レゲトン',

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
      'zh-CN': {
        translations: {
          Salsa: '莎莎',
          Bachata: '巴恰塔',
          Merengue: '梅伦格',
          Kizomba: '基宗巴',
          Reggaeton: '雷鬼冻',

          'Salsa or Bachata?': '莎莎还是巴恰塔?',
          'Play!': '开始!',

          Options: '选项',
          'Choose Genres': '选择类型',
          Done: '完成',

          correct: '没错 :D!',
          wrong: '错了 :(',
          answerFeedback: '(是{{genre}}的歌)',
          'Play Again!': '再玩!',
          'What type of song is playing?': '这是什么类型的歌?',
        },
      },
      'zh-HK': {
        translations: traditionalChineseTranslations,
      },
      'zh-TW': {
        translations: traditionalChineseTranslations,
      },
    },
    fallbackLng: 'en',
    debug: true,

    // Putting whitelist so only get language (e.g. 'en' instead of 'en-US')
    // Not using load: 'languageOnly' because still want to differentiate zh-CN vs zh-HK/zh-TW
    whitelist: ['en', 'es', 'he', 'jp', 'zh', 'zh-CN', 'zh-HK', 'zh-TW'],

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
