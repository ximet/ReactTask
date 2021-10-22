import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import classes from './FeedbackForm.module.scss';
import { validateEmailField, validateTextField } from '../../utils/validationForm';
import Link from '../Link/Link';

function FeedbackForm() {
  const [isSended, setIsSended] = useState(true);

  return (
    <div className={classes.formWrapper}>
      <h3 className={classes.title}>Feedback form</h3>
      {isSended ? (
        <div className={classes.result}>
          <h3 className={classes.title}>Thanks for your message!</h3>
          <div className={classes.description}>Our support team will answer you later.</div>
          <button className={classes.btn} onClick={() => setIsSended(false)}>
            Return to form
          </button>
        </div>
      ) : (
        <>
          <div className={classes.description}>
            You can ask any questions and our support team will answer you.
          </div>
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: ''
            }}
            onSubmit={values => {
              alert('Form was sended!');
              setIsSended(true);
            }}
          >
            {({ errors, touched, isValidating }) => (
              <Form>
                <div
                  className={[
                    classes.fieldWrapper,
                    touched.email && errors.email ? classes.error : '',
                    touched.email && !errors.email ? classes.success : ''
                  ].join(' ')}
                  data-error={touched.email && errors.email ? errors.email : ''}
                >
                  <label className={classes.label} htmlFor="email">
                    email
                  </label>
                  <Field
                    className={classes.field}
                    name="email"
                    id="email"
                    validate={validateEmailField}
                  />
                </div>
                <div
                  className={[
                    classes.fieldWrapper,
                    touched.name && errors.name ? classes.error : '',
                    touched.name && !errors.name ? classes.success : ''
                  ].join(' ')}
                  data-error={touched.name && errors.name ? errors.name : ''}
                >
                  <label className={classes.label} htmlFor="name">
                    name
                  </label>
                  <Field
                    className={classes.field}
                    name="name"
                    id="name"
                    validate={validateTextField}
                  />
                </div>
                <div
                  className={[
                    classes.fieldWrapper,
                    touched.message && errors.message ? classes.error : '',
                    touched.message && !errors.message ? classes.success : ''
                  ].join(' ')}
                  data-error={touched.message && errors.message ? errors.message : ''}
                >
                  <label className={classes.label} htmlFor="message">
                    message
                  </label>
                  <Field
                    className={classes.field}
                    name="message"
                    as="textarea"
                    validate={validateTextField}
                  />
                </div>
                <button className={classes.btn} type="submit">
                  Send feedback
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
}

export default FeedbackForm;
