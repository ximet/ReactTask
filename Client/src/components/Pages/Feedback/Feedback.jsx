import React, { useState } from 'react';
import Button from '../../layout/Buttons/Button';
import FormElement from '../../layout/Form/FormElement';
import Input from '../../layout/Form/Input/Input';
import Textarea from '../../layout/Form/Textarea/Textarea';
import Title from '../../layout/Typography/Title/Title';

function Feedback() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const user = {
      username: email,
      message: message
    };
    console.log('SUBMIT', user);
    localStorage.setItem('feedback', JSON.stringify(user));
    setEmail('');
    setMessage('');
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
        <Button type="button" name="Send" onClick={() => handleSubmit()} />
      </form>
    </div>
  );
}

export default Feedback;
