/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import SpotifyPlayButton from './SpotifyPlayButton';
import Songs from '../config/Songs';
import * as Genres from '../util/GenreUtils';

class PlayScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spotifyUri: '',
      genre: '',
      isLoaded: false,
    };

    this.answerButtons = this.answerButtons.bind(this);
  }

  componentDidMount() {
    // First randomly choose a genre
    const genre = _.sample(this.props.enabledGenres());
    const spotifyUri = _.sample(_.uniq(Songs[genre]));

    this.setState(
      {
        spotifyUri,
        genre,
        isLoaded: true,
      },
    );
  }

  answerButtons() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props;
    const enabledGenres = this.props.enabledGenres();

    const buttons = enabledGenres.map((genre) => (
      <Button
        key={`${genre} answer button`}
        style={Genres.genreButtonStyle}
        color={Genres.genreColor(genre)}
        size="lg"
        onClick={() => this.checkAnswer(genre)}
      >
        {t(_.startCase(genre))}
      </Button>
    ));

    const buttonGroup = <ButtonGroup vertical>{buttons}</ButtonGroup>;

    return buttonGroup;
  }

  checkAnswer(answer) {
    this.props.handleGameState(
      'finished',
      {
        playerWon: answer === this.state.genre,
        lastGenre: this.state.genre,
        lastSpotifyUri: this.state.spotifyUri,
      },
    );
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { t } = this.props;
    if (this.state.isLoaded) {
      return (
        <Container>
          <Row>
            <Col>
              <h2>{t('What type of song is playing?')}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.answerButtons()}
            </Col>
          </Row>
          <Row>
            <Col>
              <SpotifyPlayButton spotifyUri={this.state.spotifyUri} tiny />
            </Col>
          </Row>
        </Container>
      );
    }

    return <></>;
  }
}

PlayScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
  enabledGenres: PropTypes.func.isRequired,
};

export default withTranslation()(PlayScreen);
