import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { SnackbarContext, SnackbarContextInterface } from '../../core/contexts';
import { setLocalstorageItem } from '../../utils/localStorage';

import './FeedbackPage.scss';

type FormData = {
  name: string,
  email: string,
  message: string,
}

const initialFormData : FormData = { name: '', email: '', message: '' };

function FeedbackPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { setSnackbar } = useContext<SnackbarContextInterface>(SnackbarContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault();
    setLocalstorageItem(formData.email, formData);
    setFormData(initialFormData);
    setSnackbar({ isOpen: true, message: 'Feedback sent successfully' });
  };

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
    const { target: { name, value } } = e;
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
        <label htmlFor="feedback-text" className="feedback__form-label">
          Describe Your Feedback:
          <span style={{ color: 'red' }}>*</span>
          <textarea
            id="feedback-text"
            className="feedback__form-textarea"
            required
            value={formData.message}
            onChange={handleChange}
            name="message"
          />
        </label>
        <div className="feedback__form-inputs">
          <label htmlFor="feedback-name" className="feedback__form-label">
            Name
            <span style={{ color: 'red' }}>*</span>
            <input
              id="feedback-name"
              className="feedback__form-input"
              required
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </label>
          <label htmlFor="feedback-email" className="feedback__form-label">
            Email
            <span style={{ color: 'red' }}>*</span>
            <input
              id="feedback-email"
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
