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
      // currentSong: '',
      currentSongType: 'salsa',
    };
  }

  checkAnswer(answer) {
    this.props.handleGameState('finished', answer === this.state.currentSongType);
  }

  render() {
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
            <h6>{`(The answer is ${this.state.currentSongType})`}</h6>
          </Row>
        </header>
      </div>
    );
  }
}

PlayScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
};

export default PlayScreen;
