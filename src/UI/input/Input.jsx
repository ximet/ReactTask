import styles from '../../styles.scss';
function Input({ value, onChangeInput, ...props }) {
  return <input className={styles.input} value={value} onChange={onChangeInput} {...props} />;
}
export default Input;
