import React from 'react';
import { Button, Row } from 'reactstrap';
import PropTypes from 'prop-types';

function StartScreen({ handleGameState }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Salsa or Bachata?
        </p>
        <Row>
          <Button color="primary" onClick={() => handleGameState('playing')}>Play!</Button>
        </Row>
      </header>
    </div>
  );
}

StartScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
};

export default StartScreen;
