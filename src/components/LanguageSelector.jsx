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

const languageCodesToNames = {
  en: 'English',
  es: 'Español',
  he: 'עברית',
  jp: '日本語',
  'zh-CN': '中文（简体）',
  'zh-HK': '中文（繁體）',
};

function LanguageCodeToName(languageCode) {
  let lookupCode = languageCode;

  if (lookupCode === 'zh-tw') {
    lookupCode = 'zh-HK';
  }

  return _.get(languageCodesToNames, lookupCode, null);
}

function LanguageSelector() {
  const { i18n } = useTranslation();
  const currentLanguage = LanguageCodeToName(i18n.language) ? i18n.language : 'en';
  const dropDownItems = _.keys(languageCodesToNames).map((languageCode) => (
    <DropdownItem
      onClick={() => i18n.changeLanguage(languageCode)}
      key={`${languageCode} DropDownItem`}
    >
      {LanguageCodeToName(languageCode)}
    </DropdownItem>
  ));

  return (
    <Container style={{ marginTop: '40px' }}>
      <Row>
        <Col>
          <UncontrolledButtonDropdown>
            <DropdownToggle color="link" caret size="sm" style={{ color: 'gray' }}>
              <IoMdGlobe />
              {` ${LanguageCodeToName(currentLanguage)}`}
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
