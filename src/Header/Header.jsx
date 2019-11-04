import React from 'react';

export default function Header() {
  return (
    <div
      style={{
        gridArea: 'header',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: '2rem',
      }}
    >
      Simple Weather App
    </div>
  );
}
