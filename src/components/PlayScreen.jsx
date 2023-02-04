/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import SpotifyPlayButton from './SpotifyPlayButton';
import Songs from '../config/Songs';
import * as Genres from '../util/GenreUtils';

function PlayScreen(props) {
  const [spotifyUri, setSpotifyUri] = useState('');
  const [genre, setGenre] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const { t } = useTranslation();

  function initializeGenre() {
    // First randomly choose a genre
    const chosenGenre = _.sample(props.enabledGenres());
    const chosenSpotifyUri = _.sample(_.uniq(Songs[chosenGenre]));
    setSpotifyUri(chosenSpotifyUri);
    setGenre(chosenGenre);
    setIsLoaded(true);
  }

  function checkAnswer(answer) {
    props.handleGameState(
      'finished',
      {
        newPlayerWon: answer === genre,
        newLastGenre: genre,
        newLastSpotifyUri: spotifyUri,
      },
    );
  }

  function answerButtons() {
    const enabledGenres = props.enabledGenres();
    const buttons = enabledGenres.map((enabledGenre) => (
      <Button
        key={`${enabledGenre} answer button`}
        style={Genres.genreButtonStyle}
        color={Genres.genreColor(enabledGenre)}
        size="lg"
        onClick={() => checkAnswer(enabledGenre)}
      >
        {t(_.startCase(enabledGenre))}
      </Button>
    ));

    const buttonGroup = <ButtonGroup vertical>{buttons}</ButtonGroup>;

    return buttonGroup;
  }

  if (isLoaded) {
    return (
      <Container>
        <Row>
          <Col>
            <h2>{t('What type of song is playing?')}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            {answerButtons()}
          </Col>
        </Row>
        <Row>
          <Col>
            <SpotifyPlayButton spotifyUri={spotifyUri} />
          </Col>
        </Row>
      </Container>
    );
  }

  initializeGenre();
  return <></>;
}

PlayScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
  enabledGenres: PropTypes.func.isRequired,
};

export default PlayScreen;
