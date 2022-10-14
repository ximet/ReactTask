import React, { useState } from 'react';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import styles from '../styles.scss';
import e from 'cors';
import { useDispatch, useSelector } from 'react-redux';
import { setComment, setUserName } from '../redux/features/commentSlice';

function Feedback() {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  const dispatch = useDispatch();
  const userName = useSelector(state => state.comment.userName);
  const comment = useSelector(state => state.comment.comment);
  function addFeedback(e) {
    e.preventDefault();
    comments.push({ name: userName, comment: comment });
    localStorage.setItem('comments', JSON.stringify(comments));
    dispatch(setComment(''));
    dispatch(setUserName(''));
  }
  return (
    <>
      <form onSubmit={addFeedback} className={styles.formFeedback}>
        <Input
          onChange={e => dispatch(setUserName(e.target.value))}
          placeholder="Your name"
          value={userName}
        />
        <textarea
          onChange={e => dispatch(setComment(e.target.value))}
          placeholder="Your comment"
          type="text"
          value={comment}
        />
        <Button type="submit" text="Submit" />
      </form>
      <div className={styles.comments}>
        {comments.map((comment, id) => (
          <p key={id}>
            <span>@{comment.name}</span>: "{comment.comment}"
          </p>
        ))}
      </div>
    </>
  );
}
export default Feedback;
