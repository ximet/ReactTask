import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../MenuList/MenuList';
import Button from '../Button/Button';
import { Header as StyledHeader, Container, Title, Navigation } from './Header.Styles';

function Header({ toggleTheme }) {
  return (
    <StyledHeader>
      <Container>
        <Button onClick={toggleTheme}>Switch Theme</Button>
      </Container>
      <Title>Simple Wheather App</Title>
      <Navigation>
        <MenuList />
      </Navigation>
    </StyledHeader>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired
};

export default Header;
