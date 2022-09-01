import React, { FunctionComponent } from 'react';

// Styles
import { Flex } from '../../styles/global';
import * as S from './styles';

// Assets
import { IconLocation } from '../../assets/images/svg';

const Location: FunctionComponent = () => (
  <S.Location>
    <Flex>
      <IconLocation />
      <p>
        <span>Vilnius</span>, Lithuania
      </p>
    </Flex>
  </S.Location>
);

export default Location;
