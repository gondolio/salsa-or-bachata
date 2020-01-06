import React from 'react';
import _ from 'lodash';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import SpotifyPlayButton from './SpotifyPlayButton';

function GameOverScreen({
  handleGameState,
  playerWon,
  lastGenre,
  lastSpotifyUri,
}) {
  const { t } = useTranslation();
  let outputMessage;
  let buttonColor;
  if (playerWon) {
    outputMessage = 'correct';
    buttonColor = 'success';
  } else {
    outputMessage = 'wrong';
    buttonColor = 'danger';
  }

  const lastGenreName = t(_.startCase(lastGenre));
  const lastGenreMessage = t('answerFeedback', { genre: lastGenreName });
  return (
    <Container>
      <Row>
        <Col>
          <h2>{t(outputMessage)}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color={buttonColor} size="lg" onClick={() => handleGameState('playing')}>{t('Play Again!')}</Button>
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
