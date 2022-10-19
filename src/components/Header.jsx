import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTheme } from '../redux/features/themeSlice';
import styles from '../styles.scss';

function Header() {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();
  function switchTheme(themeName) {
    dispatch(setTheme(themeName));
  }

  useEffect(() => {
    const backgroundColorHeader = `var(--background-color-${theme})`;
    const backgroundColorMain = `var(--background-color-main-${theme})`;
    document.body.style.setProperty('--background-color', backgroundColorHeader);
    document.body.style.setProperty('--background-color-main', backgroundColorMain);
  }, [theme]);
  return (
    <nav className={styles.appheader}>
      <div>
        <Link onClick={() => switchTheme('light')}>Light</Link>
        <Link onClick={() => switchTheme('dark')}>Dark</Link>
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
