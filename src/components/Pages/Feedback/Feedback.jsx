import React, { useState } from 'react';
import Button from '../../layout/Buttons/Button';
import FormElement from '../../layout/Form/FormElement';
import Title from '../../layout/Typography/Title/Title';

function Feedback() {
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      username: email,
      message: message
    };
    console.log('SUBMIT BABY', user);
    localStorage.setItem('feedback', JSON.stringify(user));
    setemail('');
    setmessage('');
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
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email..."
            onChange={event => setemail(event.target.value)}
          />
        </FormElement>
        <textarea
          placeholder="Message..."
          rows="15"
          id="text"
          name="message"
          value={message}
          onChange={event => setmessage(event.target.value)}
        ></textarea>
        <Button name="Send" click={event => handleSubmit(event)} />
      </form>
    </div>
  );
}

export default Feedback;
