import React, { useState } from 'react';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import styles from '../styles.scss';
import e from 'cors';

function Feedback() {
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  function addFeedBack(e) {
    e.preventDefault();
    comments.push({ name: userName, comment: comment });
    localStorage.setItem('comments', JSON.stringify(comments));
    setComment('');
    setUserName('');
  }
  return (
    <>
      <form onSubmit={e => addFeedBack(e)} className={styles.formFeedback}>
        <Input
          onChange={e => setUserName(e.target.value)}
          placeholder="Your name"
          value={userName}
        />
        <textarea
          onChange={e => setComment(e.target.value)}
          placeholder="Your comment"
          type="text"
          value={comment}
        />
        <Button type="submit" text="Submit" />
      </form>
      <div className={styles.comments}>
        {comments.map((comment, id) => (
          <p key={id}>
            <span>{comment.name}</span>: "{comment.comment}"
          </p>
        ))}
      </div>
    </>
  );
}
export default Feedback;
