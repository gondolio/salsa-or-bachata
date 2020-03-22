/* eslint-disable react/destructuring-assignment */
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';
import GameOverScreen from './GameOverScreen';
import OptionsModal from './OptionsModal';
import LanguageSelector from './LanguageSelector';
import * as Genres from '../util/GenreUtils';
import ScoreBoard from './ScoreBoard';

function Game() {
  const [gameState, setGameState] = useState('starting');
  const [playerWon, setPlayerWon] = useState(false);
  const [genreIsEnabled, setGenreIsEnabled] = useState(Genres.genreIsEnabledDefault());
  const [lastSpotifyUri, setLastSpotifyUri] = useState('');
  const [lastGenre, setLastGenre] = useState('');
  const correctCount = useRef(0);
  const incorrectCount = useRef(0);

  function enabledGenres() {
    return Genres.sortedGenres(
      _.keys(
        _.pickBy(genreIsEnabled, _.identity),
      ),
    );
  }

  function handleGameState(
    newGameState,
    {
      newPlayerWon = playerWon,
      newLastGenre = lastGenre,
      newLastSpotifyUri = lastSpotifyUri,
    } = {},
  ) {
    setGameState(newGameState);
    setPlayerWon(newPlayerWon);
    setLastGenre(newLastGenre);
    setLastSpotifyUri(newLastSpotifyUri);
  }

  if (gameState === 'playing') {
    return (
      <>
        <PlayScreen
          handleGameState={handleGameState}
          enabledGenres={enabledGenres}
          key={JSON.stringify(genreIsEnabled)}
          /*  OptionsModal can change this.state.genreIsEnabled
              When this happens we want PlayScreen to be reset.
              Key therefore uses this.state.genreIsEnabled because
              when a key changes, React will create a new component instance
              rather than update the current one (see link below)
              https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component */
        />
        <ScoreBoard
          correctCount={correctCount.current}
          incorrectCount={incorrectCount.current}
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
    // update the scores on the scoreboard
    if (playerWon) {
      correctCount.current += 1;
    } else {
      incorrectCount.current += 1;
    }

    return (
      <>
        <GameOverScreen
          handleGameState={handleGameState}
          playerWon={playerWon}
          lastSpotifyUri={lastSpotifyUri}
          lastGenre={lastGenre}
        />
        <ScoreBoard
          correctCount={correctCount.current}
          incorrectCount={incorrectCount.current}
        />
        <LanguageSelector />
      </>
    );
  }

  console.log('no ifs');

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
