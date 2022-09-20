import React, { useState, useEffect } from 'react';
import * as styles from '../../styles/HomePage.module.css';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import { Nav } from './Nav/Nav.js';

function HomePage(props) {
  return (
    <>
      <Header />
      <main>
        <Nav />
      </main>
      <Footer />
    </>
  );
}

export { HomePage };
