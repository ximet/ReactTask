import React from 'react';
import classes from './feedbackForm.module.css';
import { Formik, Form } from 'formik';
import { feedbackFormInitialValues } from '../../globalConsts';

class FeedbackForm extends React.Component {
  render() {
    return (
      <Formik initialValues={feedbackFormInitialValues}>
        {formik => (
          <div className={classes.container}>
            <h4 className={classes.formTitle}>Leave your feedback</h4>
            {console.log(formik)}
            <Form></Form>
          </div>
        )}
      </Formik>
    );
  }
}

export default FeedbackForm;
