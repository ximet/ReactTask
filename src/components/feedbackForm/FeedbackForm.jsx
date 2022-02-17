import classes from './feedbackForm.scss';
import { useHistory } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import DataService from '../../dataService/DataService';

function FeedbackForm() {
  const email = useInput('', { isEmpty: true, email: true });
  const name = useInput('', { isEmpty: true, minLength: 2, maxLength: 30 });
  const review = useInput('', { isEmpty: true, minLength: 5, maxLength: 300 });

  const history = useHistory();

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = {
      email: email.value,
      name: name.value,
      review: review.value
    };

    DataService.setReview(formData);

    history.push('/feedback/success');
  }

  return (
    <form className={classes.form} onSubmit={handleFormSubmit}>
      <div className={classes.formField}>
        <label>Email</label>
        {email.errors.map(error => (
          <div key={error} className={classes.error}>
            {error}
          </div>
        ))}
        <input
          value={email.value}
          name="email"
          className={classes.input}
          onChange={email.onChange}
          onBlur={email.onBlur}
        ></input>
      </div>
      <div className={classes.formField}>
        <label>Name</label>
        {name.errors.map(error => (
          <div key={error} className={classes.error}>
            {error}
          </div>
        ))}
        <input
          value={name.value}
          className={classes.input}
          name="name"
          onChange={name.onChange}
          onBlur={name.onBlur}
        ></input>
      </div>
      <div className={classes.formField}>
        <label>Tell us how we can improve</label>
        {review.errors.map(error => (
          <div key={error} className={classes.error}>
            {error}
          </div>
        ))}
        <textarea
          className={classes.textarea}
          value={review.value}
          name="review"
          onChange={review.onChange}
          onBlur={review.onBlur}
        ></textarea>
      </div>
      <button
        className={classes.button}
        type="submit"
        disabled={!email.isInputValid || !name.isInputValid || !review.isInputValid}
      >
        Send
      </button>
    </form>
  );
}

export default FeedbackForm;
