import React from 'react';
import PropTypes from 'prop-types';

function SpotifyPlayButton({ spotifyUri }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${spotifyUri}`}
      width="300"
      height="80"
      frameBorder="0"
      allow="encrypted-media"
      title="I am a Spotify play button"
    />
  );
}

SpotifyPlayButton.propTypes = {
  spotifyUri: PropTypes.string.isRequired,
};

export default SpotifyPlayButton;
