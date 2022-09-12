import styles from './Button.scss';

function Button({ children, ...props }) {
  return (
    <button {...props} className={styles.Btn}>
      {children}
    </button>
  );
}
export default Button;
