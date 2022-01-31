import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { setLocalstorageItem } from '../../utils/localStorage';

import './FeedbackPage.scss';

const initialFormData = { name: '', email: '', message: '' };

function FeedbackPage() {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocalstorageItem(formData.email, formData);
    setFormData(initialFormData);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="feedback-page">
      <h2 className="feedback__title">Feedback Form</h2>
      <p className="feedback__description">
        We would love to hear your thoughts, suggestions, concerns
        or problems with anything so we can improve!
      </p>

      <form className="feedback__form" onSubmit={handleSubmit}>
        <label className="feedback__form-label">
          Describe Your Feedback:
          <span style={{ color: 'red' }}>*</span>
          <textarea
            className="feedback__form-textarea"
            required
            value={formData.message}
            onChange={handleChange}
            name="message"
          />
        </label>
        <div className="feedback__form-inputs">
          <label className="feedback__form-label">
            Name
            <span style={{ color: 'red' }}>*</span>
            <input
              className="feedback__form-input"
              required
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </label>
          <label className="feedback__form-label">
            Email
            <span style={{ color: 'red' }}>*</span>
            <input
              className="feedback__form-input"
              required
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </label>
        </div>
        <div className="feedback__form-buttons">
          <Link className="feedback__form-link" to="/">&#10229; Back to Main page</Link>
          <button className="feedback__form-button" type="submit">Send Feedback</button>
        </div>
      </form>

    </div>
  );
}

export default FeedbackPage;
