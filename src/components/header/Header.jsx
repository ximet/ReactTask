import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" id="logo" onClick={() => openBar(open)}>
            Weather System
          </Link>
          <span onClick={() => openBar(open)}>{open ? '+' : '-'}</span>
        </S.Wrapper>
        <S.NavLinks show={open}>
          <Link to="/about" onClick={() => openBar(open)}>
            About
          </Link>
          <Link to="/contacts" onClick={() => openBar(open)}>
            Contacts
          </Link>
        </S.NavLinks>
      </S.Header>
    </S.HeaderWrapper>
  );
};

export default Header;
