import React, { FunctionComponent } from 'react';

// Store
import { useAppSelector } from '../../../app/hooks';

// Components
import GeoLocation from '../GeoLocation';
import Search from '../Search';
import ThemeSwitch from '../ThemeSwitch';

// Styles
import { Container, Flex } from '../../styles/global';
import * as S from './styles';

const Header: FunctionComponent = () => {
  const { theme } = useAppSelector(state => state.theme);

  return (
    <S.Header theme={theme}>
      <Container>
        <Flex justifySpaceBetween>
          <GeoLocation />
          <Search />
          <ThemeSwitch />
        </Flex>
      </Container>
    </S.Header>
  );
};

export default Header;
