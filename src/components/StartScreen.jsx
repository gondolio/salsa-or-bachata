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
    <Container>
      <Row>
        <Col>
          <h2>Salsa or Bachata?</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary" size="lg" onClick={() => handleGameState('playing')}>Play!</Button>
        </Col>
      </Row>
    </Container>
  );
}

StartScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
};

export default StartScreen;
