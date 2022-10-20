import React, { useState, useEffect } from 'react';
import * as styles from '../../styles/HomePage.module.css';
import { Nav } from './Nav/Nav.js';

function HomePage(props) {
  if (localStorage.getItem('userInput') === null) {
    const userInput = {};
    localStorage.setItem('userInput', JSON.stringify(userInput));
  }

  return <Nav />;
}

export { HomePage };
