import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { toggleTheme } from 'redux/actionCreators/theme';
import { useAppSelector } from 'redux/hooks';

// Components
import GeoLocation from '../GeoLocation';
import Search from '../Search';
import ButtonSwitch from '../ButtonSwitch';

// Styles
import { Container, Flex } from '../../styles/global';
import * as S from './styles';

// Assets
import { IconLightMode, IconDarkMode } from '../../assets/images/svg';

const Header: FunctionComponent = () => {
  const theme = useAppSelector(state => state.theme.theme);

  const dispatch = useDispatch();

  const handleThemeSwitch = () => dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));

  return (
    <S.Header theme={theme}>
      <Container>
        <Flex justifySpaceBetween>
          <GeoLocation />
          <Search />
          <ButtonSwitch width="6.25rem" switchType="theme" onClick={handleThemeSwitch}>
            <IconLightMode />
            <IconDarkMode />
          </ButtonSwitch>
        </Flex>
      </Container>
    </S.Header>
  );
};

export default Header;
