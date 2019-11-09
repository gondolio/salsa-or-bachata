import React from 'react';
import PropTypes from 'prop-types';

function SpotifyPlayButton({ spotifyUri, tiny }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${spotifyUri}`}
      width={tiny ? '80' : '300'}
      height="80"
      frameBorder="0"
      allow="encrypted-media"
      title="I am a Spotify play button"
    />
  );
}

SpotifyPlayButton.propTypes = {
  spotifyUri: PropTypes.string.isRequired,
  tiny: PropTypes.bool,
};

SpotifyPlayButton.defaultProps = {
  tiny: false,
};

export default SpotifyPlayButton;
