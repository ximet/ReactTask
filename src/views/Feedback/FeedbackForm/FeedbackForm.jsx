import React from 'react';
import styles from './FeedbackForm.module.scss';
import { useForm, Controller } from 'react-hook-form';

function FeedbackForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input type="text" {...register('firstName', { required: true })} />
      {errors.firstName && <p>This field is required</p>}

      <label>Last name</label>
      <input type="text" {...register('lastName')} />

      <div className={styles.starRatingGroup}>
        <input type="radio" id="rating-5" name="rating" value="5" />
        <label htmlFor="rating-5"></label>
        <input type="radio" id="rating-4" name="rating" value="4" />
        <label htmlFor="rating-4"></label>
        <input type="radio" id="rating-3" name="rating" value="3" />
        <label htmlFor="rating-3"></label>
        <input type="radio" id="rating-2" name="rating" value="2" />
        <label htmlFor="rating-2"></label>
        <input type="radio" id="rating-1" name="rating" value="1" />
        <label htmlFor="rating-1"></label>
      </div>

      <input type="submit" />
      <input
        style={{ display: 'block', marginTop: 20 }}
        type="button"
        onClick={() => reset()}
        value="Custom Reset Field Values & Errors"
      />
    </form>
  );
}

export default FeedbackForm;
