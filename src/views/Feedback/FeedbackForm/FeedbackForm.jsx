import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import styles from './FeedbackForm.module.scss';
import RatingInput from '../../../components/RatingInput/RatingInput';
import Line from '../../../components/Line/Line';

const textAreaMaxLength = 200;

function FeedbackForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(
      `User ${data.firstName} ${data.lastName} rate the app for ${data.rating} stars. Comment: '${data.feedback}'`
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.feedbackForm}>
      <Controller
        control={control}
        name="rating"
        rules={{ required: true }}
        render={({ field: { onChange } }) => <RatingInput onChange={onChange} />}
      />
      <Line type="horizontal" theme="dark" />
      {errors.rating && <p className={styles.inputError}>Please rate our app</p>}
      <label className={styles.inputLabel}>First name*</label>
      <input
        type="text"
        className={styles.textInput}
        {...register('firstName', { required: true })}
      />
      {errors.firstName && <p className={styles.inputError}>This field is required</p>}
      <label className={styles.inputLabel}>Last name</label>
      <input type="text" className={styles.textInput} {...register('lastName')} />
      <label className={styles.inputLabel}>Tell us how we can inprove our app </label>
      <textarea
        className={styles.textareaInput}
        {...register('feedback', { maxLength: textAreaMaxLength })}
      />
      {errors.feedback && (
        <p className={styles.inputError}>
          Field must contain less than {textAreaMaxLength} symbols
        </p>
      )}
      <span className={styles.inputPrompt}>* - required</span>
      <input type="submit" className={styles.submitBtn} value="Send feedback" />
      <input className={styles.resetBtn} type="reset" onClick={() => reset()} value="Clear form" />
    </form>
  );
}

export default FeedbackForm;
