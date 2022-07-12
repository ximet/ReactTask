import styles from './ErrorMessage.module.scss';

function ErrorMessage({ message }) {
  return <small className={styles.message}>{message && `❌ ${message}`}</small>;
}

export default ErrorMessage;
