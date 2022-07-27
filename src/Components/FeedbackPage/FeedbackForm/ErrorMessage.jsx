import { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';

import styles from './ErrorMessage.module.scss';

function ErrorMessage({ message }) {
  const { theme } = useContext(ThemeContext);

  return <small className={styles[`${theme}-theme`]}>{message && `❌ ${message}`}</small>;
}

export default ErrorMessage;
