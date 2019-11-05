import React from 'react';
import PropTypes from 'prop-types';

import HomeSvg from './svg/HomeSvg';
import AbroadSvg from './svg/AbroadSvg';

const SideMenuButton = ({ children, onClick }) => (
  <button
    type="button"
    style={{
      cursor: 'pointer',
      border: 'none',
      background: 'none',
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

SideMenuButton.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function SideMenu({ onHomeClick, onAbroadClick }) {
  return (
    <div
      style={{
        backgroundColor: '#2e334e',
        display: 'grid',
        justifyItems: 'center',
        gridArea: 'sideMenu',
        color: '#eee',
      }}
    >
      <ul
        style={{
          display: 'grid',
          alignContent: 'start',
          justifyItems: 'center',
          gridGap: '2rem',
          listStyle: 'none',
          padding: 0,
          margin: '2rem 0',
          fontSize: '1.5rem',
        }}
      >
        <SideMenuButton onClick={onHomeClick}>
          <HomeSvg />
        </SideMenuButton>
        <SideMenuButton onClick={onAbroadClick}>
          <AbroadSvg />
        </SideMenuButton>
      </ul>
    </div>
  );
}

SideMenu.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  onAbroadClick: PropTypes.func.isRequired,
};
