import styles from '../../styles.scss';
function Input({ value, onChange, ...props }) {
  return <input className={styles.input} value={value} onChange={onChange} {...props} />;
}
export default Input;
