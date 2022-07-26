import { useEffect, useState, useContext } from 'react';
import { saveData } from '../../../DataService/localDataService';
import { ErrorMessage } from '../../index';
import { ThemeContext } from '../../../context/themeContext';

import styles from './FeedbackForm.module.scss';

function FeedbackForm() {
  const { theme } = useContext(ThemeContext);

  const initialValues = {
    username: '',
    email: '',
    comments: '',
    newsletter: true,
    feature: '',
    feedbackType: ''
  };
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormErrors(validate(formData));
  }

  function saveToLocalStorage() {
    if (Object.keys(formErrors).length === 0) {
      saveData(formData);
    }
  }

  useEffect(() => {
    saveToLocalStorage();
  }, [formErrors]);

  function validate(values) {
    const errors = {};
    const emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.username) {
      errors.username = 'Name is required!';
    } else if (values.username.length < 3) {
      errors.username = 'Must be at least 3 characters';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!emailRegEx.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.comments) {
      errors.comments = 'Please leave a comment!';
    } else if (values.comments.length < 20) {
      errors.comments = 'Must be at least 20 characters';
    }
    if (!values.feature) {
      errors.feature = 'Please select a feature!';
    }
    if (values.feedbackType === 'selection' || !values.feedbackType) {
      errors.feedbackType = 'Please select feedback type!';
    }
    return errors;
  }

  return (
    <div className={styles[`${theme}-theme`]}>
      <div className={styles['title-wrapper']}>
        <h2 className={styles.title}>Send Feedback!</h2>
        <h4 className={styles.subtitle}>
          Please use this form to share your feedback. If you’re experiencing technical issues,
          please include details.
        </h4>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="username">Name</label>
          <ErrorMessage message={formErrors.username} />
          <input
            id="username"
            type="text"
            onChange={handleChange}
            name="username"
            value={formData.username}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <ErrorMessage message={formErrors.email} />
          <input
            id="email"
            type="text"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="comments">Comments</label>
          <ErrorMessage message={formErrors.comments} />
          <textarea
            id="comments"
            value={formData.comments}
            onChange={handleChange}
            name="comments"
            rows={5}
          />
        </div>

        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            name="newsletter"
          />
          <label htmlFor="newsletter">Do you wish to join our newsletter?</label>
        </div>

        <fieldset>
          <legend>What feature is your feedback about?</legend>

          <label htmlFor="currentConditions" className={styles['fieldset-group']}>
            <input
              type="radio"
              id="currentConditions"
              name="feature"
              value="Current Conditions"
              checked={formData.feature === 'Current Conditions'}
              onChange={handleChange}
            />
            Current Conditions
          </label>

          <label htmlFor="forecast" className={styles['fieldset-group']}>
            <input
              type="radio"
              id="forecast"
              name="feature"
              value="Forecast"
              checked={formData.feature === 'Forecast'}
              onChange={handleChange}
            />
            Forecast
          </label>

          <label htmlFor="locations" className={styles['fieldset-group']}>
            <input
              type="radio"
              id="locations"
              name="feature"
              value="List of locations"
              checked={formData.feature === 'List of locations'}
              onChange={handleChange}
            />
            List of locations
          </label>

          <label htmlFor="other" className={styles['fieldset-group']}>
            <input
              type="radio"
              id="other"
              name="feature"
              value="Other"
              checked={formData.feature === 'Other'}
              onChange={handleChange}
            />
            Other
          </label>
          <ErrorMessage message={formErrors.feature} />
        </fieldset>

        <div className={styles.inputContainer}>
          <label htmlFor="feature">Feedback type</label>
          <ErrorMessage message={formErrors.feedbackType} />
          <select
            id="feedbackType"
            value={formData.feedbackType}
            onChange={handleChange}
            name="feedbackType"
          >
            <option value="selection">-- Select Feedback Type --</option>
            <option value="dataIssue">Issue with data</option>
            <option value="feedback">Request for a feature</option>
            <option value="featureBug">Feature not behaving as expected</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button className={styles.btn}>Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
