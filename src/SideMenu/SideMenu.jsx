import React from 'react';

export default function SideMenu() {
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
          gridGap: '2rem',
          listStyle: 'none',
          padding: 0,
          margin: '1rem 0',
          fontSize: '1.5rem',
        }}
      >
        <li>123</li>
        <li>456</li>
      </ul>
    </div>
  );
}
