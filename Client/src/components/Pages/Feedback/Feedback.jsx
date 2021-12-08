import React, { useState } from 'react';
import Button from '../../layout/Buttons/Button';
import FormElement from '../../layout/Form/FormElement';
import Input from '../../layout/Form/Input/Input';
import Textarea from '../../layout/Form/Textarea/Textarea';
import Title from '../../layout/Typography/Title/Title';
import { validateFeedbackForm } from '../../../services/validateFeedbackForm';

function Feedback() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const user = {
      username: email,
      message: message
    };

    if (validateFeedbackForm(email, message)) {
      localStorage.setItem('feedback', JSON.stringify(user));
      setEmail('');
      setMessage('');
    } else {
      alert('incorrect');
    }
  };

  return (
    <div>
      <Title>Feedback</Title>
      <p>
        Dear User, your feedback is important for us. Please feel free to let us know what you think
        about this app.
      </p>
      <form className="form" id="form">
        <FormElement>
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="Email..."
            onChange={event => setEmail(event.target.value)}
          />
        </FormElement>
        <Textarea
          placeholder="Message..."
          rows={15}
          id="text"
          name="message"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <Button type="button" name="Send" onClick={() => handleSubmit()} buttonType="regular" />
      </form>
    </div>
  );
}

export default Feedback;
