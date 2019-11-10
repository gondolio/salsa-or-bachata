import React from 'react';
import _ from 'lodash';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import SpotifyPlayButton from './SpotifyPlayButton';

function GameOverScreen({ handleGameState, playerWon, lastGenre, lastSpotifyUri }) {
  let outputMessage;
  let buttonColor;
  if (playerWon) {
    outputMessage = 'Correct! :D';
    buttonColor = 'success';
  } else {
    outputMessage = 'Wrong :(';
    buttonColor = 'danger';
  }

  const lastGenreMessage = `(It was a ${_.startCase(lastGenre)} song)`;
  return (
    <Container>
      <Row>
        <Col>
          <h2>{outputMessage}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color={buttonColor} size="lg" onClick={() => handleGameState('playing')}>Play Again!</Button>
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col>
          <h6><i>{lastGenreMessage}</i></h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <SpotifyPlayButton spotifyUri={lastSpotifyUri} />
        </Col>
      </Row>
    </Container>
  );
}

GameOverScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
  playerWon: PropTypes.bool.isRequired,
  lastSpotifyUri: PropTypes.string.isRequired,
  lastGenre: PropTypes.string.isRequired,
};

export default GameOverScreen;
