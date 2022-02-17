import classes from './feedbackForm.scss';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DataService from '../../dataService/DataService';

const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const VALIDATORS = {
  isEmpty: value => !!(value.length === 0),
  minLength: (value, param) => !!(value.length < param),
  maxLength: (value, param) => !!(value.length > param),
  email: value => !EMAIL_REGEXP.test(value)
};

const ERROR_MESSAGES = {
  isEmpty: 'This field is required',
  minLength: 'Incorrect length',
  maxLength: 'Incorrect length',
  email: 'Incorrect email'
};

function useValidation(value, validators) {
  const [errors, setErrors] = useState({
    isEmpty: false,
    minLength: false,
    email: false,
    maxLength: false
  });
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const validator in validators) {
      const isError = VALIDATORS[validator](value, validators[validator]);
      setErrors(prev => ({ ...prev, [validator]: isError }));
    }
  }, [value]);

  useEffect(() => {
    setIsInputValid(true);

    for (const error in errors) {
      if (errors[error]) {
        setIsInputValid(false);
        break;
      }
    }
  }, [errors]);

  return { errors, isInputValid };
}

function useInput(initialValue, validators) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  const valid = useValidation(value, validators);
  const errorMessages = createErrorMessages(valid.errors, isDirty);

  valid.errors = errorMessages;

  function onChange(event) {
    const value = event.target.value;

    setValue(value);
  }

  function onBlur(event) {
    setIsDirty(true);
  }

  return { value, onChange, onBlur, ...valid};
}

function createErrorMessages(errors, isDirty) {
  const errorMessages = [];

  for (const error in errors) {
    if (isDirty && errors[error]) errorMessages.push(ERROR_MESSAGES[error]);
  }

  return errorMessages;
}

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
