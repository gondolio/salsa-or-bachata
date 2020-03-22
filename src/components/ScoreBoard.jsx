import React from 'react';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


function ScoreBoard(props) {
  const { t } = useTranslation();

  return (
    <Container>
      <Row className="show-grid justify-content-md-center" >
        <Col md="auto">
            {t('Correct')}: {props.correct}
        </Col>
        <Col md="auto">
            {t('Wrong')}: {props.wrong}
        </Col>
      </Row>
    </Container>
  );
}

ScoreBoard.propTypes = {
  correct: PropTypes.string,
  wrong: PropTypes.string,
};

export default ScoreBoard;
