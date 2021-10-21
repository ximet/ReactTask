import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import styles from './FeedbackForm.module.scss';
import RatingInput from '../../../components/RatingInput/RatingInput';

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
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.feedbackForm}>
      <label className={styles.inputLabel}>First name*</label>
      <input
        type="text"
        className={styles.textInput}
        {...register('firstName', { required: true })}
      />
      {errors.firstName && <p className={styles.inputError}>This field is required</p>}
      <label className={styles.inputLabel}>Last name</label>
      <input type="text" className={styles.textInput} {...register('lastName')} />
      <textarea
        rows="10"
        className={styles.textareaInput}
        {...register('feedback', { maxLength: 5 })}
      />
      {errors.feedback && <p className={styles.inputError}>To long</p>}
      <span className={styles.inputPrompt}>* - required</span>
      <Controller
        control={control}
        name="rating"
        rules={{ required: true }}
        render={({ field: { onChange } }) => <RatingInput onChange={onChange} />}
      />
      <input type="submit" className={styles.submitBtn} value="Send feedback" />
      <input className={styles.resetBtn} type="reset" onClick={() => reset()} value="Clear form" />
    </form>
  );
}

export default FeedbackForm;
