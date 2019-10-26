const GenreMasterConfig = {
  salsa: {
    color: 'danger', // Color for buttons etc
    order: 0, // Sort order in a list
    enabled: true, // The default for whether the genre is enabled in the game
  },
  bachata: {
    color: 'warning',
    order: 1,
    enabled: true,
  },
  merengue: {
    color: 'secondary',
    order: 2,
    enabled: false,
  },
  reggaeton: {
    color: 'light',
    order: 3,
    enabled: false,
  },
  kizomba: {
    color: 'info',
    order: 4,
    enabled: false,
  },
};

export default GenreMasterConfig;
