import React from 'react';
import styled from 'styled-components';
import Clock from '../clock/clock';

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 40px;
  background-color: #A52A2A;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Header = () => (
  <HeaderWrapper>
    <Clock />
  </HeaderWrapper>
);

export default Header;
