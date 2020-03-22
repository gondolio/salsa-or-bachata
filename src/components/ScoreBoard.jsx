import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


function ScoreBoard(props) {
  const { t } = useTranslation();
  const { correctCount, incorrectCount } = props;
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          {`${t('scoreBoardCorrect')}: ${correctCount}`}
        </Col>
        <Col md="auto">
          {`${t('scoreBoardIncorrect')}: ${incorrectCount}`}
        </Col>
      </Row>
    </Container>
  );
}

ScoreBoard.propTypes = {
  correctCount: PropTypes.string.isRequired,
  incorrectCount: PropTypes.string.isRequired,
};

export default ScoreBoard;
