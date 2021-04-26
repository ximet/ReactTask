import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../MenuList/MenuList';
import Button from '../Button/Button';
import { LIGHT_THEME, DARK_THEME } from '../../common/constants';
import * as Styled from './Header.Styles';

function Header({ setTheme, theme }) {
  const nextTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

  return (
    <Styled.Header>
      <Styled.Container>
        <Button onClick={() => setTheme(nextTheme)}>
          Set <Styled.Theme>{nextTheme}</Styled.Theme> Theme
        </Button>
      </Styled.Container>
      <Styled.Title>Simple Wheather App</Styled.Title>
      <Styled.Navigation>
        <MenuList />
      </Styled.Navigation>
    </Styled.Header>
  );
}

Header.propTypes = {
  setTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default Header;
