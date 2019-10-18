import React from 'react';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';

function StartScreen({ handleGameState }) {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <h2>Salsa or Bachata?</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <Button color="primary" size="lg" onClick={() => handleGameState('playing')}>Play!</Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

StartScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
};

export default StartScreen;
