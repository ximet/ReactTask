import styles from './MyButton.scss';

export function MyBytton({ children, ...props }) {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
}
