import React from 'react';
import { ErrorMessage, useField } from 'formik';
import classes from './feedbackFormField.module.css';
import PropTypes from 'prop-types';

function FeedbackFormField({ label, fieldType, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={classes.container}>
      <label className={classes.formFieldlabel} htmlFor={field.name}>
        {label}
      </label>
      {fieldType == 'input' ? (
        <input
          className={`${classes.formField} ${meta.touched && meta.error && classes.isInvalid}`}
          {...field}
          {...props}
          autoComplete="off"
        />
      ) : (
        <textarea
          className={`${classes.formField} ${classes.textArea} ${
            meta.touched && meta.error && 'isInvalid'
          }`}
          {...field}
          {...props}
        />
      )}
      <ErrorMessage component="div" name={field.name} className={classes.error} />
    </div>
  );
}

FeedbackFormField.defaultProps = {
  fieldType: 'input'
};

FeedbackFormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fieldType: PropTypes.string
};

export default FeedbackFormField;
