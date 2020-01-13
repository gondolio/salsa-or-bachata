/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import _ from 'lodash';
import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';
import GameOverScreen from './GameOverScreen';
import OptionsModal from './OptionsModal';
import LanguageSelector from './LanguageSelector';
import * as Genres from '../util/GenreUtils';

function Game() {
  const [gameState, setGameState] = useState('starting');
  const [playerWon, setPlayerWon] = useState(false);
  const [genreIsEnabled, setGenreIsEnabled] = useState(Genres.genreIsEnabledDefault());
  const [lastSpotifyUri, setLastSpotifyUri] = useState('');
  const [lastGenre, setLastGenre] = useState('');

  const enabledGenres = () => (
    Genres.sortedGenres(
      _.keys(
        _.pickBy(genreIsEnabled, _.identity),
      ),
    )
  );

  const handleGameState = (
    newGameState,
    {
      newPlayerWon = playerWon,
      newLastGenre = lastGenre,
      newLastSpotifyUri = lastSpotifyUri,
    } = {},
  ) => {
    setGameState(newGameState);
    setPlayerWon(newPlayerWon);
    setLastGenre(newLastGenre);
    setLastSpotifyUri(newLastSpotifyUri);
  };

  if (gameState === 'playing') {
    return (
      <>
        <PlayScreen
          handleGameState={handleGameState}
          enabledGenres={enabledGenres}
          key={JSON.stringify(genreIsEnabled)}
          /* OptionsModal can change this.state.genreIsEnabled
              When this happens we want PlayScreen to be reset.
              Key therefore uses this.state.genreIsEnabled because
              when a key changes, React will create a new component instance
              rather than update the current one (see link below)
              https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component */
        />
        <OptionsModal
          genreIsEnabled={genreIsEnabled}
          setGenreIsEnabled={setGenreIsEnabled}
        />
        <LanguageSelector />
      </>
    );
  }

  if (gameState === 'finished') {
    return (
      <>
        <GameOverScreen
          handleGameState={handleGameState}
          playerWon={playerWon}
          lastSpotifyUri={lastSpotifyUri}
          lastGenre={lastGenre}
        />
        <LanguageSelector />
      </>
    );
  }

  return (
    <>
      <StartScreen handleGameState={handleGameState} />
      <OptionsModal
        genreIsEnabled={genreIsEnabled}
        setGenreIsEnabled={setGenreIsEnabled}
      />
      <LanguageSelector />
    </>
  );
}

export default Game;
