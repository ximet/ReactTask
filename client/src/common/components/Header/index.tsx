import React, { FunctionComponent } from 'react';

// Store
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { toggleTheme } from '../../../features/theme/themeSlice';

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
  const { theme } = useAppSelector(state => state.theme);

  const dispatch = useAppDispatch();

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
