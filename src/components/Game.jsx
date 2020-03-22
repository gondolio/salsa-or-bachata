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
  var correctCount = useRef(0);
  var wrongCount = useRef(0);
  // const [wrongCount, setWrongCount] = useRef(0);

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
        />
        <ScoreBoard correct={correctCount.current} wrong={wrongCount.current} />
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
    if (playerWon) 
      correctCount.current = correctCount.current + 1; 
    else 
      wrongCount.current = wrongCount.current + 1; 

    return (
      <>
        <GameOverScreen
          handleGameState={handleGameState}
          playerWon={playerWon}
          lastSpotifyUri={lastSpotifyUri}
          lastGenre={lastGenre}
        />
        <ScoreBoard correct={correctCount.current} wrong={wrongCount.current} />
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
