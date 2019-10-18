import React from 'react';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';
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
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h2>{outputMessage}</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <Button color={buttonColor} size="lg" onClick={() => handleGameState('starting')}>Play Again!</Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

GameOverScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
  playerWon: PropTypes.bool.isRequired,
};

export default GameOverScreen;
