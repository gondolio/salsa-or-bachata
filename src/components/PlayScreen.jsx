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
import Songs from '../config/Songs';
import * as Genres from './util/Genres';

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
    const enabledGenres = this.props.enabledGenres();

    const buttons = enabledGenres.map((genre) => (
      <Button
        key={`${genre} answer button`}
        style={Genres.genreButtonStyle}
        color={Genres.genreColor(genre)}
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
        <Container>
          <Row>
            <Col>
              <h2>What type of song is playing?</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.answerButtons()}
            </Col>
          </Row>
          <Row>
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
      );
    }

    return <></>;
  }
}

PlayScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
  enabledGenres: PropTypes.func.isRequired,
};

export default PlayScreen;
