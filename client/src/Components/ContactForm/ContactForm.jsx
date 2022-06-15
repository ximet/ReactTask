import React from 'react';
import { useFormik } from 'formik';
import * as Style from './ContactForm.styles';
import { StyledSpinner } from '../Spinner/Spinner.styles';

//Here we set up the initial settings and functions to handle and validate the forms while using Formik.
const initialValues = {
  name: '',
  email: '',
  comments: ''
};

//Here we handle setting info from input fields setting it to local storage
const onSubmit = values => {
  localStorage.setItem('contactMsg', JSON.stringify(values));
};

//here is Form validation, checking if fields have info in them and email validation regex
const validate = values => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must be at least 3 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.comments) {
    errors.comments = 'Required';
  } else if (values.comments.length < 20) {
    errors.comments = 'Must be atleast 20 characters';
  }

  return errors;
};

const ContactForm = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <Style.Container data-testid="contact-form">

      <form onSubmit={handleSubmit}>
        <Style.FormControl>
          <label htmlFor="name">Name</label>
          {/* in each Input field we add properties from formik to see if it has been visited or has value inside */}
          <Style.Input
            data-testid="name-input"
            type="text"
            name="name"
            id="name"
            {...getFieldProps('name')}
            //getFieldProps method can help to reduce code, by eliminating the need to use handleBlur, handleChange and values methods
          />
          {/* We also add conditional rendering of the error, checking if all requirements in the input field has been fullfiled */}
          {touched.name && errors.name ? (
            <Style.Error data-testid="error">{errors.name}</Style.Error>
          ) : null}
        </Style.FormControl>

        <Style.FormControl>
          <label htmlFor="email">Email</label>
          <Style.Input
            data-testid="email-input"
            type="text"
            name="email"
            id="email"
            {...getFieldProps('email')}
          />
          {touched.email && errors.email ? (
            <Style.Error data-testid="error">{errors.email}</Style.Error>
          ) : null}
        </Style.FormControl>

        <Style.FormControl>
          <label htmlFor="comments">Comment</label>
          <Style.TextArea
            data-testid="comments-input"
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            {...getFieldProps('comments')}
          ></Style.TextArea>
          {touched.comments && errors.comments ? (
            <Style.Error data-testid="error">{errors.comments}</Style.Error>
          ) : null}
        </Style.FormControl>

        <Style.Button data-testid="button-submit" type="submit">
          Submit
        </Style.Button>
        {/* it can be noted, that the <button> tag can be written without the submit type attribute, since it is wrapped
      inside the form tag, Formik automatically assigns the submit tag. */}
      </form>
    </Style.Container>
  );
};

export default ContactForm;
