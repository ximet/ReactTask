import { useSelector } from 'react-redux';

import styles from './ErrorMessage.module.scss';

function ErrorMessage({ message }) {
  const theme = useSelector((state) => state.theme);

  return <small className={styles[`${theme}-theme`]}>{message && `❌ ${message}`}</small>;
}

export default ErrorMessage;
