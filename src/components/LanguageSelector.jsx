import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap';
import { IoMdGlobe } from 'react-icons/io';
import _ from 'lodash';


function LanguageSelector() {
  const { i18n } = useTranslation();
  const languageCodeToName = {
    en: 'English',
    es: 'Español',
    he: 'עברית',
    jp: '日本語',
    zhcn: '中文（简体）',
    zhhk: '中文（繁體）',
  };

  const currentLanguage = _.has(languageCodeToName, i18n.language) ? i18n.language : 'en';

  const dropDownItems = _.keys(languageCodeToName).map((code) => (
    <DropdownItem
      onClick={() => i18n.changeLanguage(code)}
      key={`${code} DropDownItem`}
    >
      {languageCodeToName[code]}
    </DropdownItem>
  ));

  return (
    <Container style={{ marginTop: '40px' }}>
      <Row>
        <Col>
          <UncontrolledButtonDropdown>
            <DropdownToggle color="link" caret size="sm" style={{ color: 'gray' }}>
              <IoMdGlobe />
              {` ${languageCodeToName[currentLanguage]}`}
            </DropdownToggle>
            <DropdownMenu>
              {dropDownItems}
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </Col>
      </Row>
    </Container>
  );
}

export default LanguageSelector;
