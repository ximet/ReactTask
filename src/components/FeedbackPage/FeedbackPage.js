import React, { useEffect } from 'react';
import { setInLS } from '../../services/localStorage.js';
import { store } from '../../redux/store.js';
import { SAVE_USER_FEEDBACK } from '../../redux/actions.js';
import * as styles from '../../styles/FeedbackPage.module.css';

function FeedbackPage(props) {
   if (localStorage.getItem('userInput') === null) {
      const userInput = {};
      localStorage.setItem('userInput', JSON.stringify(userInput));
   }

   const unsubscribe = store.subscribe(() => {
    console.log('Store changed!', store.getState());
   });

   useEffect(() => {
    return () => {
      unsubscribe();
    };
   });

   const onSubmit = ev => {
    ev.preventDefault();
    const form = document.querySelector('form');

    const data = new FormData(form);
    const question1 = data.get('question1');
    const question2 = data.get('question2');
    const question3 = data.get('question3');
    const question4 = data.get('question4');

    const user = {
      question1,
      question2,
      question3,
      question4
    };
    setInLS(user);
    store.dispatch(SAVE_USER_FEEDBACK(user));
    alert('Thank you for the feedback!');
    form.reset();
   };

   return (
    <form onSubmit={onSubmit} className={styles.feedbackForm}>
      <h2 className={styles.feedbackHeading}>Give us your feedback!</h2>
      <div className={styles.formGroup}>
        <label htmlFor="question1">1. How often do you use this application?</label>
        <input type="text" placeholder="Type your answer here" name="question1"></input>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="question2">2. What is your overall impression of the application?</label>
        <input type="text" placeholder="Type your answer here" name="question2"></input>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="question3">
          3. Are you able to easily find the location you are searching for?
        </label>
        <input type="text" placeholder="Type your answer here" name="question3"></input>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="question4">
          4. What improvements to the application would you recommend?
        </label>
        <input type="text" placeholder="Type your answer here" name="question4"></input>
      </div>
      <button className={styles.submitBtn}>Submit</button>
    </form>
   );
}

export { FeedbackPage };
