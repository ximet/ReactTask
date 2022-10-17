import styles from '../../styles.scss';

function Switch({ ...props }) {
  return (
    <label className={styles.switch} {...props}>
      <input type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  );
}
export default Switch;
