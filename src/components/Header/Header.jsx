import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../MenuList/MenuList';
import Button from '../Button/Button';
import * as Styled from './Header.Styles';

function Header({ toggleTheme }) {
  return (
    <Styled.Header>
      <Styled.Container>
        <Button onClick={toggleTheme}>Switch Theme</Button>
      </Styled.Container>
      <Styled.Title>Simple Wheather App</Styled.Title>
      <Styled.Navigation>
        <MenuList />
      </Styled.Navigation>
    </Styled.Header>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired
};

export default Header;
