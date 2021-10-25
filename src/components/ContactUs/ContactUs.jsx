import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { handleFormSubmit, validateForm } from '../../utils/utils';
import './ContactUs.css';

function ContactUs() {
  const [shouldShowSubmitMessage, setShouldShowSubmitMessage] = useState(false);
  return (
    <div className="contact-us">
      <h2 className="contact-us__title">Contact us</h2>
      {shouldShowSubmitMessage ? (
        <div className="contact-us__thanks-message">Thank you for contacting us</div>
      ) : (
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={validateForm}
          onSubmit={(values, { setSubmitting }) =>
            handleFormSubmit(values, setSubmitting, setShouldShowSubmitMessage)
          }
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

              <button type="submit" disabled={isSubmitting} className="contact-us__btn">
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
