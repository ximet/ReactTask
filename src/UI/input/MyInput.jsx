import styles from './MyInput.scss';

export default function MyInput(props) {
  return <input className={styles.myInput} {...props} />;
}
