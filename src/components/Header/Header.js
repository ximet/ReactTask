import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as styles from '../../styles/Header.module.css';
import * as darkStyles from '../../styles/dark_mode/HeaderDark.module.css';
import cloudLogo from '../../images/cloud.png';

function Header(props) {
  const heading = <h1 className={styles.heading}>Weather Forecast</h1>;

  return (
    <>
      <header className={props.darkMode ? darkStyles.header : styles.header}>
        <ul className={styles.leftLinks}>
          <li>
            <Link to="/" className={styles.leftLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.leftLink}>
              About us
            </Link>
          </li>
        </ul>
        <div className={styles.headerLogoWrapper}>
          {heading}
          <img className={styles.img} src={cloudLogo} alt="Cloud Logo"></img>
        </div>
        <ul className={styles.rightLinks}>
          <li>
            <Link to="/feedback" className={styles.rightLink}>
              Feedback
            </Link>
          </li>
          <li>
            <label className={styles.switch}>
              <input type="checkbox"></input>
              <span className={styles.slider} onClick={() => props.toggleMode()}></span>
            </label>
          </li>
        </ul>
      </header>
    </>
  );
}

export { Header };
