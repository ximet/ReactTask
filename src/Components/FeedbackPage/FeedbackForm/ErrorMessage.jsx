import { BiErrorCircle } from 'react-icons/bi';
import styles from './ErrorMessage.module.scss';

function ErrorMessage({ message }) {
  return <small className={styles.message}>{message}</small>;
}

export default ErrorMessage;
