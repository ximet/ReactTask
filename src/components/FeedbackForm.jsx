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

  const changeVal = e => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const radioSelected = e => {
    setFormValues({ ...formValues, rating: e.target.value })
  }

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
      setValidity(false);
      Array.from(document.getElementsByName('rating')).map(item => item.checked = false);
    } else {
      alert('Something went wrong! Please try again.');
    }
  };

  const formSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    const { firstName, lastName, mail, rating, feedback } = formValues;
    if (firstName && lastName && mail && rating && feedback) {
      setValidity(true);
      setTimeout(function () {
        localStorage.setItem('survey-form', JSON.stringify(formValues));
        resetForm({ status: 200 });
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
          {submitted && !formValues.firstName && <span className="error-msg">Name is empty or invalid!</span>}
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
          {submitted && !formValues.lastName && <span className="error-msg">Last name is empty or invalid!</span>}
        </fieldset>
        <fieldset>
          <label htmlFor="mail">E-mail:</label>
          <input type="email" id="mail" name="mail" value={formValues.mail} onChange={changeVal} />
          {submitted && !formValues.mail && <span className="error-msg">E-mail is empty or invalid!</span>}
        </fieldset>
        <fieldset>
          <label htmlFor="satisfactory-index">Rate our services</label>
          <div className='radio-set-container'>
            <div className='radio-set'>
              <input type="radio" id="satisfactoryIndex1"
                name="rating" value="super-bad" onChange={radioSelected} />
              <label htmlFor="satisfactoryIndex1">&#128169;</label>
            </div>
            <div className='radio-set'>
              <input type="radio" id="satisfactoryIndex2"
                name="rating" value="bad" onChange={radioSelected} />
              <label htmlFor="satisfactoryIndex2">&#129314;</label>
            </div>
            <div className='radio-set'>
              <input type="radio" id="satisfactoryIndex3"
                name="rating" value="mediocre" onChange={radioSelected} />
              <label htmlFor="satisfactoryIndex3">&#128547;</label>
            </div>
            <div className='radio-set'>
              <input type="radio" id="satisfactoryIndex4"
                name="rating" value="OK" onChange={radioSelected} />
              <label htmlFor="satisfactoryIndex4">&#129300;</label>
            </div>
            <div className='radio-set'>
              <input type="radio" id="satisfactoryIndex5"
                name="rating" value="good" onChange={radioSelected} />
              <label htmlFor="satisfactoryIndex5">&#128522;</label>
            </div>
            <div className='radio-set'>
              <input type="radio" id="satisfactoryIndex6"
                name="rating" value="very-good" onChange={radioSelected} />
              <label htmlFor="satisfactoryIndex6">&#x1F60D;</label>
            </div>
            <div className='radio-set'>
              <input type="radio" id="satisfactoryIndex7"
                name="rating" value="excellent" onChange={radioSelected} />
              <label htmlFor="satisfactoryIndex7">&#127866;</label>
            </div>
            {submitted && !formValues.rating && <span className="error-msg">You didn't rate us!</span>}
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
