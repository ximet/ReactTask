import { useEffect, useState } from 'react';
import DataService from '../../dataService/DataService';
import classes from './form.scss';

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
}

function useValidation(value, validators) {
    const [errors, setErrors] = useState({isEmpty: false, minLength: false, email: false, maxLength: false});
    const [isInputValid, setIsInputValid] = useState(false);

    useEffect(() => {
        for (const validator in validators) {
            const isError = VALIDATORS[validator](value, validators[validator]);
            setErrors((prev) => ({ ...prev, [validator]: isError }));
        }
    }, [value]);

    useEffect(() => {
        setIsInputValid(true);

        for (const error in errors) {
            if(errors[error]) {
                setIsInputValid(false);
                break;
            }
        }
    }, [errors]);

    return {errors, isInputValid};
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
    
    return { value, onChange, onBlur, ...valid };
}

function createErrorMessages(errors, isDirty) {
    const errorMessages = [];

    for(const error in errors) {
       if (isDirty && errors[error]) errorMessages.push(ERROR_MESSAGES[error]);
    }

    return errorMessages;
}

function Form() {
    const email = useInput('', { isEmpty: true, email: true });
    const name = useInput('', { isEmpty: true, minLength: 2, maxLength: 30});
    const review = useInput('', {isEmpty: true, minLength: 5, maxLength: 300});

    function handleFormSubmit(event) {
        event.preventDefault();
        
        const formData = {
            email: email.value,
            name: name.value,
            review: review.value
        }

        DataService.setReview(formData);
    }

  return (
    <form className={classes.form} onSubmit={handleFormSubmit}>
      <div className={classes.formField}>
            <label>Email</label>
            {email.errors.map(error => (
                <div key={error} className={classes.error}>{error}</div>
            ))}
            <input
            name="email"
            className={classes.input}
            onChange={e => email.onChange(e)}
            onBlur={e => email.onBlur(e)}
            ></input>
        </div>
        <div className={classes.formField}>
            <label>Name</label>
            {name.errors.map(error => (
                <div key={error} className={classes.error}>{error}</div>
            ))}
            <input
            className={classes.input}
            name="name"
            onChange={e => name.onChange(e)}
            onBlur={e => name.onBlur(e)}
            ></input>
        </div>
        <div className={classes.formField}>
            <label>Tell us how we can improve</label>
            {review.errors.map(error => (
                <div key={error} className={classes.error}>{error}</div>
            ))}
            <textarea className={classes.textarea} name="review" onChange={e => review.onChange(e)} onBlur={e => review.onBlur(e)}></textarea>
        </div>
        <button
            className={classes.button}
            type='submit'
            disabled={!email.isInputValid || !name.isInputValid  || !review.isInputValid}
        >
            Send
        </button>
    </form>
  );
}

export default Form;