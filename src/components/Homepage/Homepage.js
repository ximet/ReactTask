import React, { useState, useEffect } from 'react';
import * as styles from '../../styles/HomePage.module.css';
import { Nav } from './Nav/Nav.js';

function HomePage(props) {
  return (
    <>
      <main>
        <Nav />
      </main>
    </>
  );
}

export { HomePage };
