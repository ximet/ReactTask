import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Style from './Header.styles.js';

const Header = () => {
  const [open, setOpen] = useState(true);

  const openBar = () => {
    setOpen(!open);
  };

  return (
    <Style.HeaderWrapper>
      <Style.Header>
        <Style.Wrapper>
          <Link to="/" id="logo" onClick={() => openBar(open)}>
            Weather App
          </Link>
          <span onClick={() => openBar(open)}>{open ? '+' : '-'}</span>
        </Style.Wrapper>
        <Style.HeaderRight show={open}>
          <Link to="/about" onClick={() => openBar(open)}>
            About
          </Link>
          <Link to="/contacts" onClick={() => openBar(open)}>
            Contacts
          </Link>
        </Style.HeaderRight>
      </Style.Header>
    </Style.HeaderWrapper>
  );
};

export default Header;
