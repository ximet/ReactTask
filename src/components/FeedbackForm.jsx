import axios from 'axios';
import { useState } from 'react';

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValidity] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    mail: '',
    rating: '',
    feedback: ''
  });

  const radioOptions = [
    { val: "super-bad", emoji: '\u{1F4A9}' },
    { val: "bad", emoji: '\u{1F922}' },
    { val: "mediocre", emoji: '\u{1F623}' },
    { val: "OK", emoji: '\u{1F914}' },
    { val: "good", emoji: '\u{1F60A}' },
    { val: "very-good", emoji: '\u{1F60D}' },
    { val: "excellent", emoji: '\u{1F37A}' },
  ]

  const changeVal = e => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const radioSelected = e => {
    setFormValues({ ...formValues, rating: e.target.value });
  };

  const resetForm = data => {
    if (data.status === 200) {
      setFormValues({
        firstName: '',
        lastName: '',
        mail: '',
        rating: '',
        feedback: ''
      });
      setSubmitted(false);
      Array.from(document.getElementsByName('rating')).map(item => (item.checked = false));
    } else {
      alert('Something went wrong! Please try again.');
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    const { firstName, lastName, mail, rating, feedback } = formValues;
    if (firstName && lastName && mail && rating && feedback) {
      localStorage.setItem('survey-form', JSON.stringify(formValues));
      setValidity(true);
      resetForm({ status: 200 });
      setTimeout(function () {
        setValidity(false);
      }, 5000);
    }
  };

  return (
    <div>
      {valid && <div className="success-msg">Form submitted successfully!</div>}
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
          {submitted && !formValues.firstName && (
            <span className="error-msg">Name is empty or invalid!</span>
          )}
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
          {submitted && !formValues.lastName && (
            <span className="error-msg">Last name is empty or invalid!</span>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="mail">E-mail:</label>
          <input type="email" id="mail" name="mail" value={formValues.mail} onChange={changeVal} />
          {submitted && !formValues.mail && (
            <span className="error-msg">E-mail is empty or invalid!</span>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="satisfactory-index">Rate our services</label>
          <div className="radio-set-container">
            {radioOptions.map((obj, idx) => {
              const a = new DOMParser().parseFromString(obj.emoji, "text/xml")
              console.log(a)
              return (<div className="radio-set">
                <input
                  type="radio"
                  id={`satisfactoryIndex${idx}`}
                  name="rating"
                  value={obj.val}
                  onChange={radioSelected}
                />
                <label htmlFor={`satisfactoryIndex${idx}`}>{obj.emoji} </label>
              </div>)
            })}

            {submitted && !formValues.rating && (
              <span className="error-msg">You didn't rate us!</span>
            )}
          </div>
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
