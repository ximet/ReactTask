import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../../utils/translations/';
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
          <Link to="/" id="logo" onClick={openBar}>
            {translations.msg_page_weather_system_label}
          </Link>
          <span onClick={openBar}>{open ? '+' : '-'}</span>
        </S.Wrapper>
        <S.NavLinks show={open}>
          <Link to="/weather" onClick={openBar}>
            {translations.msg_page_city_weather_label}
          </Link>
          <Link to="/about" onClick={openBar}>
            {translations.msg_page_about_label}
          </Link>
          <Link to="/contacts" onClick={openBar}>
            {translations.msg_page_contacts_label}
          </Link>
        </S.NavLinks>
      </S.Header>
    </S.HeaderWrapper>
  );
};

export default Header;
