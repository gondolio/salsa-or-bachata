/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import * as Genres from '../util/GenreUtils';

function OptionsModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [genreButtonIsEnabled, setGenreButtonIsEnabled] = useState(props.genreIsEnabled);

  const { t } = useTranslation();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = () => {
    toggleModal();
    props.setGenreIsEnabled(genreButtonIsEnabled);
  };

  const handleOptionButtonClick = (genre) => {
    const newGenreButtonIsEnabled = {
      ...genreButtonIsEnabled,
      [genre]: !genreButtonIsEnabled[genre],
    };

    // Only update if at least one genre remains enabled
    if (_.includes(newGenreButtonIsEnabled, true)) {
      setGenreButtonIsEnabled(newGenreButtonIsEnabled);
    }
  };

  const optionButtons = () => {
    // eslint-disable-next-line react/prop-types
    const buttons = Genres.sortedGenres().map((genre) => (
      <Button
        className={genreButtonIsEnabled[genre] ? '' : 'disabled'}
        key={`${genre} answer button`}
        style={Genres.genreButtonStyle}
        color={Genres.genreColor(genre)}
        size="lg"
        onClick={() => handleOptionButtonClick(genre)}
        outline={!genreButtonIsEnabled[genre]}
      >
        {t(_.startCase(genre))}
      </Button>
    ));

    const buttonGroup = <ButtonGroup vertical>{buttons}</ButtonGroup>;

    return buttonGroup;
  };

  const resetModal = () => {
    setGenreButtonIsEnabled(props.genreIsEnabled);
  };

  return (
    <Container style={{ marginTop: '10px' }}>
      <Row>
        <Col>
          <Button color="link" onClick={toggleModal}>{t('Options')}</Button>
          <Modal
            isOpen={isModalOpen}
            size="sm"
            centered
            toggle={toggleModal}
            onClosed={resetModal} // Don't want genre buttons to persist once modal closes
          >
            <form className="App" onSubmit={handleSubmit}>
              <ModalHeader>{t('Choose Genres')}</ModalHeader>
              <ModalBody>
                <Container fluid>
                  <Row>
                    <Col>
                      {optionButtons()}
                    </Col>
                  </Row>
                </Container>
              </ModalBody>
              <ModalFooter className="no-border">
                <Container fluid>
                  <Row className="justify-content-center">
                    <Col>
                      <Button color="primary" onClick={handleSubmit}>{t('Done')}</Button>
                    </Col>
                  </Row>
                </Container>
              </ModalFooter>
            </form>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

OptionsModal.propTypes = {
  genreIsEnabled: PropTypes.shape({}),
  setGenreIsEnabled: PropTypes.func.isRequired,
};

OptionsModal.defaultProps = {
  genreIsEnabled: {},
};

export default OptionsModal;
