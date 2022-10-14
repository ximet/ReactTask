import React from 'react';
import Input from '../UI/input/Input';
import styles from '../styles.scss';

function Feedback() {
  return (
    <form className={styles.formFeedback}>
      <Input placeholder="Your name" />
      <textarea placeholder="Your comment" type="text" />
    </form>
  );
}
export default Feedback;
