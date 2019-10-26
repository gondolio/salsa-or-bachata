/* eslint-disable react/destructuring-assignment */
import React from 'react';
import _ from 'lodash';
import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';
import GameOverScreen from './GameOverScreen';
import OptionsModal from './OptionsModal';
import * as Genres from './util/Genres';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: 'starting',
      playerWon: false,
      genreIsEnabled: Genres.genreIsEnabledDefault(),
    };

    this.handleGameState = this.handleGameState.bind(this);
    this.setGenreIsEnabled = this.setGenreIsEnabled.bind(this);
    this.enabledGenres = this.enabledGenres.bind(this);
  }

  setGenreIsEnabled(genreIsEnabled) {
    this.setState({ genreIsEnabled });
  }

  enabledGenres() {
    return (
      Genres.sortedGenres(
        _.keys(
          _.pickBy(this.state.genreIsEnabled, _.identity),
        ),
      )
    );
  }

  handleGameState(
    gameState,
    playerWon = false,
  ) {
    this.setState(
      {
        gameState,
        playerWon,
      },
    );
  }


  render() {
    if (this.state.gameState === 'playing') {
      return (
        <>
          <PlayScreen
            handleGameState={this.handleGameState}
            enabledGenres={this.enabledGenres}
            key={JSON.stringify(this.state.genreIsEnabled)}
            /* OptionsModal can change this.state.genreIsEnabled
               When this happens we want PlayScreen to be reset.
               Key therefore uses this.state.genreIsEnabled because
               when a key changes, React will create a new component instance
               rather than update the current one (see link below)
               https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component */
          />
          <OptionsModal
            genreIsEnabled={this.state.genreIsEnabled}
            setGenreIsEnabled={this.setGenreIsEnabled}
          />
        </>
      );
    }

    if (this.state.gameState === 'finished') {
      return (
        <GameOverScreen
          handleGameState={this.handleGameState}
          playerWon={this.state.playerWon}
        />
      );
    }

    return (
      <>
        <StartScreen handleGameState={this.handleGameState} />
        <OptionsModal
          genreIsEnabled={this.state.genreIsEnabled}
          setGenreIsEnabled={this.setGenreIsEnabled}
        />
      </>
    );
  }
}

export default Game;
