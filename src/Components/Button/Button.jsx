import { ThemeContext } from '../../context/themeContext';
import { useContext } from 'react';

import styles from './Button.module.scss';

function Button({ children }) {
  const { theme } = useContext(ThemeContext);

  return <button className={styles[`${theme}-theme--btn`]}>{children}</button>;
}

export default Button;
