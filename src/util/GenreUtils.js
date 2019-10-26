// Master config of genres and their appearances
import _ from 'lodash';
import GenreMasterConfig from '../config/Genres';

export const genreButtonStyle = {
// Add spacing between buttons in vertical button group
  marginBottom: '10px',
  borderRadius: '10px',
};

export function genreColor(genre) {
  return _.get(GenreMasterConfig, [genre, 'color'], 'secondary');
}

export function genreOrder(genre) {
  return _.get(GenreMasterConfig, [genre, 'order'], Number.MAX_SAFE_INTEGER);
}

export function sortedGenres(genres = _.keys(GenreMasterConfig)) {
  return (
    genres.sort((a, b) => (
      genreOrder(a) - genreOrder(b)
    ))
  );
}

export function genreIsEnabledDefault() {
  return _.mapValues(GenreMasterConfig, (genre) => (genre.enabled));
}
