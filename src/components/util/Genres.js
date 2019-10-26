// Master config of genres and their appearances
import _ from 'lodash';

const genreMasterConfig = {
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

export const genreButtonStyle = {
// Add spacing between buttons in vertical button group
  marginBottom: '10px',
  borderRadius: '10px',
};

export function genreColor(genre) {
  return _.get(genreMasterConfig, [genre, 'color'], 'secondary');
}

export function genreOrder(genre) {
  return _.get(genreMasterConfig, [genre, 'order'], Number.MAX_SAFE_INTEGER);
}

export function sortedGenres(genres = _.keys(genreMasterConfig)) {
  return (
    genres.sort((a, b) => (
      genreOrder(a) - genreOrder(b)
    ))
  );
}

export function genreIsEnabledDefault() {
  return _.mapValues(genreMasterConfig, (genre) => (genre.enabled));
}
