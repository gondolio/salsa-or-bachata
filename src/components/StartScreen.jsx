import React from 'react';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


function StartScreen({ handleGameState }) {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col>
          <h2>{t('Salsa or Bachata?')}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary" size="lg" onClick={() => handleGameState('playing')}>{t('Play!')}</Button>
        </Col>
      </Row>
    </Container>
  );
}

StartScreen.propTypes = {
  handleGameState: PropTypes.func.isRequired,
};

export default StartScreen;
