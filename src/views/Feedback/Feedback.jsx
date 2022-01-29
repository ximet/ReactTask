import React from 'react';
import classes from '../../App.module.css';
import Form from '../../atomic-components/Form/Form';

function Feedback() {
  return (
    <div className={classes.image_container}>
      <img alt="" />
      <h1 className={classes.feedback}>Feedback Form</h1>
      <Form />
    </div>
  );
}

export default Feedback;
