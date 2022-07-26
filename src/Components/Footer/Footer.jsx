import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

import styles from './Footer.module.scss';

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={styles[`${theme}-theme`]}>
      <div className={styles.wrapper}>
        <small>Powered by</small>
        <img
          src={
            theme === 'dark'
              ? 'https://f.hubspotusercontent40.net/hubfs/4979099/logo/Foreca_logo_WRC.png'
              : 'https://f.hubspotusercontent40.net/hubfs/4979099/logo/Foreca_logo_BRC.png'
          }
          className={styles.logo}
        />
      </div>
    </footer>
  );
}

export default Footer;
