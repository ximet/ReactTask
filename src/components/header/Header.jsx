import React, { useState } from 'react';
import { translations } from '../../utils/translations/';
import { ThemeSwitcher } from '../';
import * as S from './Header.styles.js';

const Header = () => {
  const [open, setOpen] = useState(true);

  const openBar = () => {
    setOpen(!open);
  };

  return (
    <S.HeaderWrapper>
      <S.Header>
        <S.Wrapper>
          <S.LinkElem activeClassName="true" to="/" id="logo" exact onClick={openBar}>
            {translations.msg_page_weather_system_label}
          </S.LinkElem>
          <span onClick={openBar}>{open ? '+' : '-'}</span>
        </S.Wrapper>
        <S.NavLinks show={open}>
          <S.LinkElem activeClassName="true" to="/weather" onClick={openBar}>
            {translations.msg_page_city_weather_label}
          </S.LinkElem>
          <S.LinkElem activeClassName="true" to="/about" onClick={openBar}>
            {translations.msg_page_about_label}
          </S.LinkElem>
          <S.LinkElem activeClassName="true" to="/contacts" onClick={openBar}>
            {translations.msg_page_contacts_label}
          </S.LinkElem>
          <ThemeSwitcher />
        </S.NavLinks>
      </S.Header>
    </S.HeaderWrapper>
  );
};

export default Header;
