/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

/*
To do
1) componentDidMount() randomly choose song
*/

class PlayScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: {
        name: '',
        type: '',
      },
      isLoaded: false,
    };
  }

  componentDidMount() {
    // This is just for mock up
    // Later will actually have a list of songs to choose from that will play
    const songs = [
      {
        name: 'Salsa Song 1',
        type: 'salsa',
      },
      {
        name: 'Salsa Song 2',
        type: 'salsa',
      },
      {
        name: 'Bachata Song 1',
        type: 'bachata',
      },
      {
        name: 'Bachata Song 2',
        type: 'bachata',
      },
    ];

    this.setState(
      {
        song: songs[Math.floor(Math.random() * songs.length)],
        isLoaded: true,
      },
    );
  }

  checkAnswer(answer) {
    this.props.handleGameState('finished', answer === this.state.song.type);
  }

  render() {
    if (this.state.isLoaded) {
      console.log(this.state.song);
      return (
        <div className="App">
          <header className="App-header">
            <p>
              What type of song is playing?
            </p>
            <Row>
              <Col>
                <Button color="danger" onClick={() => this.checkAnswer('salsa')}>Salsa</Button>
              </Col>
              <Col>
                <Button color="warning" onClick={() => this.checkAnswer('bachata')}>Bachata</Button>
              </Col>
            </Row>
            <Row>
              <h6>{`(The answer is ${this.state.song.type})`}</h6>
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
