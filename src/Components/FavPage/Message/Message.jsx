import styles from './Message.module.scss';

function Message({ message1, message2 }) {
  return (
    <h3 className={styles.message}>
      {message1}
      <br />
      <br />
      {message2}
    </h3>
  );
}

export default Message;
