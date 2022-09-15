import React, { useState, useEffect } from 'react';
import * as homepageStyles from '../../styles/homepage.module.css';
import { Nav } from './Nav/Nav.js';

export function Homepage(props) {
  const [time, setTime] = useState('Loading...');

  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentTime = () => {
    const date = new Date();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const currentTime = `${hours}:${minutes}:${seconds}`;

    return currentTime;
  };

  return (
    <>
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <section className="layout">
        <Nav styles={homepageStyles} />
        <main></main>
      </section>
      <footer>
        <span>Current time: {time}</span>
      </footer>
    </>
  );
}
