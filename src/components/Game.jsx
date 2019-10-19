/* eslint-disable react/destructuring-assignment */
import React from 'react';
import StartScreen from './StartScreen';
import PlayScreen from './PlayScreen';
import GameOverScreen from './GameOverScreen';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: 'starting',
      playerWon: false,
    };

    this.handleGameState = this.handleGameState.bind(this);
    // this.resetGame = this.resetGame.bind(this);
    // this.evaluateInput = this.evaluateInput.bind(this);
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
      return <PlayScreen handleGameState={this.handleGameState} />;
    }

    if (this.state.gameState === 'finished') {
      return (
        <GameOverScreen
          handleGameState={this.handleGameState}
          playerWon={this.state.playerWon}
        />
      );
    }

    return <StartScreen handleGameState={this.handleGameState} />;
  }
}

export default Game;