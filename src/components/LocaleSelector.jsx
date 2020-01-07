import React from 'react';
import {
  Button,
  ButtonGroup,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

function LocaleSelector() {
  const { i18n } = useTranslation();

  // Get list of availables locales and dynamically populate widget
  return (
    <div style={{ marginTop: '20px' }}>
      <ButtonGroup>
        <Button size="sm" onClick={() => i18n.changeLanguage('zhcn')}>簡體</Button>
        <Button size="sm" onClick={() => i18n.changeLanguage('zhhk')}>繁體</Button>
        <Button size="sm" onClick={() => i18n.changeLanguage('en')}>English</Button>
        <Button size="sm" onClick={() => i18n.changeLanguage('es')}>Español</Button>
        <Button size="sm" onClick={() => i18n.changeLanguage('jp')}>日本語</Button>
      </ButtonGroup>
    </div>
  );
}

export default LocaleSelector;
