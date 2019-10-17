import React from 'react';
import { Button, Row } from 'reactstrap';
import PropTypes from 'prop-types';

function GameOverScreen({ handleGameState, playerWon }) {
  let outputMessage;
  let buttonColor;
  if (playerWon) {
    outputMessage = 'Correct! :D';
    buttonColor = 'success';
  } else {
    outputMessage = 'Wrong :(';
    buttonColor = 'danger';
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {outputMessage}
        </p>
        <Row>
          <Button color={buttonColor} size="lg" onClick={() => handleGameState('starting')}>Play Again!</Button>
        </Row>
      </header>
    </div>
  );
}

GameOverScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
  playerWon: PropTypes.bool.isRequired,
};

export default GameOverScreen;
