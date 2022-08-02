import axios from 'axios';
import { useState } from 'react';

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValidity] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    feedback: ''
  });

  const changeVal = e => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const resetForm = data => {
    if (data.status === 200) {
      setFormValues({
        firstName: '',
        lastName: '',
        mail: '',
        feedback: ''
      });
      setSubmitted(false);
      setValidity(false);
    } else {
      alert('Something went wrong! Please try again.');
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    setSubmitted(true);

    if (formValues.firstName && formValues.lastName && formValues.mail && formValues.feedback) {
      setValidity(true);
      setTimeout(async function () {
        await axios
          .post('http://localhost:3000/send-feedback', {
            ...formValues
          })
          .then(data => resetForm(data))
          .catch(err => {
            console.error('error occured: ', err.message);
          });
      }, 5000);
    }
  };

  return (
    <div>
      {valid ? <div className="success-msg">Form submitted successfully!</div> : null}
      <form id="feedback-form" onSubmit={formSubmit}>
        <fieldset>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={changeVal}
          />
          {submitted && !formValues.firstName ? (
            <span className="error-msg">Name is empty or invalid!</span>
          ) : null}
        </fieldset>
        <fieldset>
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={changeVal}
          />
          {submitted && !formValues.lastName ? (
            <span className="error-msg">Last name is empty or invalid!</span>
          ) : null}
        </fieldset>
        <fieldset>
          <label htmlFor="mail">E-mail:</label>
          <input type="email" id="mail" name="mail" value={formValues.mail} onChange={changeVal} />
          {submitted && !formValues.mail ? (
            <span className="error-msg">E-mail is empty or invalid!</span>
          ) : null}
        </fieldset>
        <fieldset>
          <label htmlFor="feedback">Please leave your feedback below</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="10"
            value={formValues.feedback}
            onChange={changeVal}
          />
          {submitted && !formValues.feedback ? (
            <span className="error-msg">Feedback empty or too short!</span>
          ) : null}
          <button type="submit">send feedback</button>
        </fieldset>
      </form>
    </div>
  );
}
