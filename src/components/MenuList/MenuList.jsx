import React from 'react';
import { UlContainer, LiItems, StyledLink } from './MenuLust.Styles';

function MenuList() {
  return (
    <UlContainer>
      <LiItems>
        <StyledLink to="/">Home</StyledLink>
      </LiItems>
      <LiItems>
        <StyledLink to="/feedback">Rate Us</StyledLink>
      </LiItems>
      <LiItems>
        <StyledLink to="/about">About Us</StyledLink>
      </LiItems>
    </UlContainer>
  );
}

export default MenuList;
