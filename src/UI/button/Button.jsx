import styles from './Button.scss';

function Button(props) {
  return (
    <button {...props} className={styles.Btn}>
      {props.text}
    </button>
  );
}
export default Button;
