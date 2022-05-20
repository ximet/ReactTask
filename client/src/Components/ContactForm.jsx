import React from 'react';
import { useFormik } from 'formik';
import * as Style from './ContactForm.styles'

//Here we set up the initial settings and functions to handle and validate the forms while using Formik.
const initialValues = {
  name: '',
  email: '',
  comments: ''
}

//Here we handle setting info from input fields setting it to local storage
const onSubmit = values => {
  localStorage.setItem('contactMsg', JSON.stringify(values))
}

//here is Form validation, checking if fields have info in them and email validation regex
const validate = values => {
  let errors = {}

  if(!values.name) {
      errors.name = 'Required'
  }

  if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

  if(!values.comments) {
      errors.comments = 'Required'
  }

  return errors
}

const ContactForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Style.FormControl>
        <label htmlFor="name">Name</label>
       {/* in each Input field we add properties from formik to see if it has been visited or has value inside */}
        <Style.Input
          type="text"
          name="name"
          id="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {/* We also add conditional rendering of the error, checking if all requirements in the input field has been fullfiled */}
        {formik.touched.name && formik.errors.name ? <Style.Error>{formik.errors.name}</Style.Error> : null}
        </Style.FormControl>

      <Style.FormControl>
        <label htmlFor="email">Email</label>
        <Style.Input
          type="text"
          name="email"
          id="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <Style.Error>{formik.errors.email}</Style.Error> : null}
      </Style.FormControl>

      <Style.FormControl>
        <label htmlFor="comments"></label>
        <Style.TextArea
          name="comments"
          id="comments"
          cols="30"
          rows="10"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.comments}
        ></Style.TextArea>
        {formik.touched.comments && formik.errors.comments ? <Style.Error>{formik.errors.comments}</Style.Error> : null}
      </Style.FormControl>


      <button type='submit'>Submit</button>
      {/* it can be noted, that the <button> tag can be written without the submit type attribute, since it is wrapped
      inside the form tag, Formik automatically assigns the submit tag. */}
      </form>
    </div>
  );
};

export default ContactForm;
