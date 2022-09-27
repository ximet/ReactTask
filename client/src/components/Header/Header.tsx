import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { setTheme, setSidebarOpen } from 'redux/actionCreators/global';
import { useAppSelector } from 'redux/hooks';

// Assets
import { IconLightMode, IconDarkMode, IconMenu } from 'assets/images/svg';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from './Header.styles';

// Components
import GeoLocation from '../GeoLocation/GeoLocation';
import Search from '../Search/Search';
import ButtonSwitch from '../ButtonSwitch/ButtonSwitch';

const Header: FunctionComponent = () => {
  const theme = useAppSelector(state => state.global.theme);

  const dispatch = useDispatch();

  const handleThemeSwitch = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  const handleSidebarOpen = () => dispatch(setSidebarOpen(true));

  return (
    <S.Header>
      <Container>
        <Flex justifySpaceBetween>
          <GeoLocation />
          <Search />
          <S.HeaderAction>
            <Flex>
              <ButtonSwitch width="6.25rem" switchType="theme" onClick={handleThemeSwitch}>
                <IconLightMode />
                <IconDarkMode />
              </ButtonSwitch>
              <S.HeaderMenuButton themeType={theme} onClick={handleSidebarOpen}>
                <IconMenu />
              </S.HeaderMenuButton>
            </Flex>
          </S.HeaderAction>
        </Flex>
      </Container>
    </S.Header>
  );
};

export default Header;
