import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 40px;
  background-color: red;
`;

const Header = ({ logo }) => (
  <HeaderWrapper>
    <img src={logo.source} alt={logo.alt} />
  </HeaderWrapper>
);

Header.propTypes = {
  logo: PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

export default Header;
