import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTheme } from '../redux/features/themeSlice';
import styles from '../styles.scss';

function Header() {
  const theme = useSelector(state => state.theme.theme);
  function switchTheme() {
    function deleteThemeData() {
      delete document.body.dataset.theme;
    }
    const dataset = document.body.getAttribute('data-theme');
    dataset ? deleteThemeData() : document.body.setAttribute('data-theme', theme);
  }

  return (
    <nav className={styles.appheader}>
      <div>
        <Link onClick={() => switchTheme()}>Switch Theme</Link>
      </div>
      <Link className={styles.logo} to="/">
        CanYouSwim??
      </Link>
      <div>
        <Link to="/feedback">Feedback</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
export default Header;
