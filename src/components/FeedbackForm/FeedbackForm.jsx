import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setLocalStorageItem } from '../../utils/localStorage';
import classes from './FeedbackForm.module.scss';

const initialFormData = { name: '', email: '', message: '' };

const FeedbackForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = event => {
    event.preventDefault();

    event.target.reset();

    setLocalStorageItem(formData.email, formData);
    setFormData(initialFormData);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.form__controllers}>
          <label className={classes.form__label}>
            name:
            <input
              className={classes.form__input}
              required
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </label>
          <label className={classes.form__label}>
            email:
            <input
              className={classes.form__input}
              required
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </label>
          <label className={classes.form__label}>
            feedback:
            <textarea
              className={classes.form__textarea}
              required
              value={formData.message}
              onChange={handleChange}
              name="message"
            />
          </label>
        </div>
        <div className={classes.form__buttons}>
          <Link className={classes.form__link} to="/">
            &#10229; Back to Main page
          </Link>
          <button className={classes.form__button} type="submit">
            Send Feedback
          </button>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
