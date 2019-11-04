import React from 'react';
import PropTypes from 'prop-types';

const WeatherWidget = () => (
  <div style={{ width: 400, height: 200 }}>
    <h1>Widget</h1>
    <ul>
      <li>kek</li>
      <li>kek</li>
      <li>kek</li>
    </ul>
  </div>
);

const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function Main() {
  return (
    <div
      style={{
        gridArea: 'main',
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'grid', justifyItems: 'right' }}>
        <WeatherWidget />
        <Button>More...</Button>
      </div>
    </div>
  );
}
