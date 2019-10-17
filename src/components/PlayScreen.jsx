/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import SONGS from '../shared/songs';

class PlayScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spotifyUri: '',
      genre: '',
      isLoaded: false,
    };
  }

  componentDidMount() {
    // First randomly choose a genre
    const allGenres = Object.keys(SONGS);
    const genre = allGenres[Math.floor(Math.random() * allGenres.length)];
    const spotifyUri = SONGS[genre][Math.floor(Math.random() * SONGS[genre].length)];

    this.setState(
      {
        spotifyUri,
        genre,
        isLoaded: true,
      },
    );
  }

  checkAnswer(answer) {
    this.props.handleGameState('finished', answer === this.state.genre);
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              What type of song is playing?
            </p>
            <Row>
              <Col>
                <Button color="danger" size="lg" onClick={() => this.checkAnswer('salsa')}>Salsa</Button>
              </Col>
              <Col>
                <Button color="warning" size="lg" onClick={() => this.checkAnswer('bachata')}>Bachata</Button>
              </Col>
            </Row>
            <Row>
              <iframe
                src={`https://open.spotify.com/embed/track/${this.state.spotifyUri}`}
                width="80"
                height="80"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
                title="I am a Spotify play button"
              />
            </Row>
          </header>
        </div>
      );
    }

    return <></>;
  }
}

PlayScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
};

export default PlayScreen;
