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
import STYLES from './Styles';
import SONGS from '../shared/songs';

class PlayScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spotifyUri: '',
      genre: '',
      isLoaded: false,
    };

    this.answerButtons = this.answerButtons.bind(this);
    this.enabledGenres = this.enabledGenres.bind(this);
  }

  componentDidMount() {
    // First randomly choose a genre
    // eslint-disable-next-line react/no-access-state-in-setstate
    const genre = _.sample(this.enabledGenres());
    const spotifyUri = _.sample(_.uniq(SONGS[genre]));

    this.setState(
      {
        spotifyUri,
        genre,
        isLoaded: true,
      },
    );
  }

  disabledGenres() {
    return (_.keys(_.omitBy(this.props.genreIsEnabled, (a) => a)));
  }

  enabledGenres() {
    return (_.keys(_.pickBy(this.props.genreIsEnabled, (a) => a)));
  }

  answerButtons() {
    const preferredButtonColors = {
      salsa: 'danger',
      bachata: 'warning',
      merengue: 'secondary',
      reggaeton: 'light',
      kizomba: 'info',
    };

    const enabledGenres = this.enabledGenres();

    const buttons = enabledGenres.map((genre) => (
      <Button
        key={`${genre} answer button`}
        style={STYLES.genreButton}
        color={preferredButtonColors[genre] || 'secondary'}
        size="lg"
        onClick={() => this.checkAnswer(genre)}
      >
        {_.startCase(genre)}
      </Button>
    ));

    const buttonGroup = <ButtonGroup vertical>{buttons}</ButtonGroup>;

    return buttonGroup;
  }

  checkAnswer(answer) {
    this.props.handleGameState('finished', answer === this.state.genre);
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className="App">
          <header className="App-header">
            <Container fluid>
              <Row className="justify-content-center">
                <Col>
                  <h2>What type of song is playing?</h2>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  {this.answerButtons()}
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                  <iframe
                    src={`https://open.spotify.com/embed/track/${this.state.spotifyUri}`}
                    width="80"
                    height="80"
                    frameBorder="0"
                    allow="encrypted-media"
                    title="I am a Spotify play button"
                  />
                </Col>
              </Row>
            </Container>
          </header>
        </div>
      );
    }

    return <></>;
  }
}

PlayScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
  genreIsEnabled: PropTypes.shape.isRequired,
};

export default PlayScreen;
