import styles from './Message.module.scss';

function Message({ children }) {
  return <div className={styles.message}>{children}</div>;
}

export default Message;
