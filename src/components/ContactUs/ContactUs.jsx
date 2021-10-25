import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { AFTER_SUBMITTING_TIMEOUT } from '../../constants/constants';

function ContactUs() {
  const [isAfterSubmittiningMessageActive, setIsAfterSubmittiningMessageActive] = useState(false);
  return (
    <div className="contact-us">
      <h2 className="contact-us__title">Contact us</h2>
      {isAfterSubmittiningMessageActive ? (
        <div className="contact-us__thanks-message">Thank you for contacting us</div>
      ) : (
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }

            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!values.message) {
              errors.message = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setIsAfterSubmittiningMessageActive(true);
            localStorage.setItem('feedback', JSON.stringify(values));
            setSubmitting(false);

            setTimeout(() => {
              setIsAfterSubmittiningMessageActive(false);
            }, AFTER_SUBMITTING_TIMEOUT);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="contact-us__form">
              <Field
                type="text"
                name="name"
                placeholder="Your name"
                className="contact-us__text-field"
              />
              <ErrorMessage name="name" component="div" className="contact-us__validation-error" />
              <Field
                type="email"
                name="email"
                placeholder="Your e-mail"
                className="contact-us__text-field"
              />
              <ErrorMessage name="email" component="div" className="contact-us__validation-error" />
              <Field
                component="textarea"
                name="message"
                placeholder="Write your message here..."
                className="contact-us__message"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="contact-us__validation-error"
              />

              <button type="submit" disabled={isSubmitting}>
                Send
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default ContactUs;
