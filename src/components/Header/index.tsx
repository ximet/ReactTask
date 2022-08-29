import React, { FunctionComponent } from 'react';


// Components
import Location from '../Location';
import Search from '../Search';
import ThemeSwitch from '../ThemeSwitch';

// Styles
import { Container, Flex } from '../../styles/global';
import * as S from './styles';

const Header: FunctionComponent = () => {

  return (
    <S.Header>
      <Container>
        <Flex justifySpaceBetween>
          <Location />
          <Search />
          <ThemeSwitch />
        </Flex>
      </Container>
    </S.Header>
  );
};

export default Header;
