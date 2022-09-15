import React from 'react';
import { DropdownMenu } from './DropdownMenu.js';

export function Nav(props) {
  return (
    <>
      <nav>
        <DropdownMenu styles={props.styles} />
      </nav>
    </>
  );
}
