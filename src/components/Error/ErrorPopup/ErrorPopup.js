import styles from './ErrorPopup.module.css';

import { BUTTON_OK_LABEL } from './../../constants';

function ErrorPopup({ title, message, onConfirm }) {
  return (
    <div className={styles.errorContainer}>
      <h3>{title}</h3>
      <p>{message}</p>
      <button onClick={onConfirm}>{BUTTON_OK_LABEL}</button>
    </div>
  );
}
export default ErrorPopup;
