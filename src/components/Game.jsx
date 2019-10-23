/* eslint-disable react/destructuring-assignment */
import React from 'react';
import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';
import GameOverScreen from './GameOverScreen';
import OptionsModal from './OptionsModal';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: 'starting',
      playerWon: false,
      genreIsEnabled: {
        salsa: true,
        bachata: true,
        merengue: false,
        reggaeton: false,
        kizomba: false,
      },
    };

    this.handleGameState = this.handleGameState.bind(this);
    this.setEnabledGenres = this.setEnabledGenres.bind(this);
  }

  setEnabledGenres(genreIsEnabled) {
    this.setState({ genreIsEnabled });
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
        <PlayScreen
          handleGameState={this.handleGameState}
          genreIsEnabled={this.state.genreIsEnabled}
        />
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
          setEnabledGenres={this.setEnabledGenres}
        />
      </>
    );
  }
}

export default Game;
