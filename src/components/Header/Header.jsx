import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../MenuList/MenuList';
import Button from '../Button/Button';
import { StyledHeader, DivButtonContainer, DivTitleContainer, StyledNav } from './Header.Styles';

function Header({ toggleTheme }) {
  return (
    <StyledHeader>
      <DivButtonContainer>
        <Button onClick={toggleTheme}>Switch Theme</Button>
      </DivButtonContainer>
      <DivTitleContainer>Simple Wheather App</DivTitleContainer>
      <StyledNav>
        <MenuList />
      </StyledNav>
    </StyledHeader>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired
};

export default Header;
