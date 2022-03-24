import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import classes from './FeedbackForm.module.css';
import StarRating from '../StarRating/StarRating';

function FeedbackForm() {
  const {
    control,
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors }
  } = useForm();
  const watchRating = watch('rating');

  const onSubmit = (data, e) => {
    e.target.reset();
    setValue('rating', 0);

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
        {...register('firstName', {
          required: 'First name is required',
          maxLength: {
            value: 20,
            message: 'This input exceed maxLength'
          }
        })}
      />
      {errors.firstName && <p className={classes.error}>{errors.firstName.message}</p>}

      <input
        type="text"
        placeholder="Last name"
        className={classes.input_text}
        {...register('lastName', {
          required: 'Last name is required',
          maxLength: {
            value: 20,
            message: 'This input exceed maxLength'
          }
        })}
      />
      {errors.lastName && <p className={classes.error}>{errors.lastName.message}</p>}

      <input
        type="text"
        placeholder="Email"
        className={classes.input_text}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /\S+@\S+\.\S+/i,
            message: 'Entered value does not match email format'
          }
        })}
      />
      {errors.email && <p className={classes.error}>{errors.email.message}</p>}

      <p className={classes.feedback_subtitle}>How would you rate the App?</p>
      <Controller
        control={control}
        name="rating"
        rules={{ required: 'Please rate our App' }}
        render={({ field: { onChange, value } }) => (
          <StarRating setRating={onChange} value={value} />
        )}
      />
      {errors.rating && <p className={classes.error}>{errors.rating.message}</p>}

      <div className={classes.textarea_wrapper}>
        <p className={classes.feedback_subtitle}>
          {watchRating < 4
            ? 'What was disappointing in your experience with us?'
            : 'What features do you value the most?'}
        </p>
        <textarea
          className={classes.textarea_input}
          {...register('feedback', {
            maxLength: {
              value: 255,
              message: 'This input exceed maxLength'
            }
          })}
        />
        {errors.feedback && <p className={classes.error}>{errors.feedback.message}</p>}
      </div>

      <input type="submit" value="Send feedback" className={classes.input_submit} />
    </form>
  );
}

export default FeedbackForm;
