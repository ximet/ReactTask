import styles from '../../styles.scss';

function Button(props) {
  const { text } = props;
  return (
    <button className={styles.btn} {...props}>
      {text}
    </button>
  );
}
export default Button;
