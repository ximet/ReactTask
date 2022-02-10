import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import classes from './FeedbackForm.module.css';
import StarRating from '../StarRating/StarRating';

function FeedbackForm() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const watchRating = watch('rating');

  const onSubmit = (data, e) => {
    e.target.reset();

    localStorage.setItem(
      'user',
      JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.mobileNumber,
        rating: data.rating
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        className={classes.input_text}
        {...register('firstName', { required: true, maxLength: 20 })}
      />

      <input
        type="text"
        placeholder="Last name"
        className={classes.input_text}
        {...register('lastName', { required: true, maxLength: 30 })}
      />

      <input
        type="text"
        placeholder="Email"
        className={classes.input_text}
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
      />

      <p className={classes.feedback_subtitle}>How would you rate the App?</p>
      <Controller
        control={control}
        name="rating"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <StarRating setRating={onChange} value={value} />
        )}
      />

      <div className={classes.textarea_wrapper}>
        <p className={classes.feedback_subtitle}>
          {watchRating < 4
            ? 'What was disappointing in your experience with us?'
            : 'What features do you value the most?'}
        </p>
        <textarea className={classes.textarea_input} {...register('feedback')} />
      </div>

      {errors.firstName && <p className={classes.input_error}>First name field should be filled</p>}
      {errors.lastName && <p className={classes.input_error}>Last name field should be filled</p>}
      {errors.email && <p className={classes.input_error}>Please enter email</p>}
      {errors.rating && <p className={classes.input_error}>Please rate our App</p>}

      <input type="submit" value="Send feedback" className={classes.input_submit} />
    </form>
  );
}

export default FeedbackForm;
