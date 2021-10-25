import { AFTER_SUBMITTING_TIMEOUT } from '../constants/constants';

export function formatTemperature(temperature) {
  return Number(temperature) <= 0 ? temperature : `+${temperature}`;
}

export function validateForm(values) {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  }
  return errors;
}

export function handleFormSubmit(values, setSubmitting, setShouldShowSubmitMessage) {
  {
    setShouldShowSubmitMessage(true);
    localStorage.setItem('feedback', JSON.stringify(values));
    setSubmitting(false);

    setTimeout(() => {
      setShouldShowSubmitMessage(false);
    }, AFTER_SUBMITTING_TIMEOUT);
  }
}
