import React, { useState } from 'react';
import useInput from '../../hooks/useInput';
import { Button, Input, TextArea, Rate } from '../';
import { EMAIL_REGEXP } from '../../config/constants';
import { Storage } from '../../services/localStorage';
import * as S from './Form.styles';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.match(EMAIL_REGEXP);
const isTextarea = value => value.length;

const BasicForm = () => {
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  const {
    value: userName,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);

  const {
    value: reviewValue,
    isValid: reviewIsValid,
    hasError: reviewHasError,
    valueChangeHandler: reviewChangeHandler,
    inputBlurHandler: reviewBlurHandler,
    reset: resetReview
  } = useInput(isTextarea);

  let formIsValid = false;

  if (userNameIsValid && emailIsValid && reviewIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    Storage.setReview({
      userName,
      emailValue,
      reviewValue,
      rating
    });

    resetName();
    resetEmail();
    resetReview();
    setMessage('Your form submitted!');
  };

  const formBlurHandler = () => {
    setMessage('');
  };

  const userStarRating = rate => {
    setRating(rate);
  };

  return (
    <S.FormWrapper onSubmit={submitHandler} onBlur={formBlurHandler}>
      <Input
        value={userName}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        labelName="name"
        labelTitle="Your name"
        errorMessage="Please enter your name"
        isError={userNameHasError}
      />
      <Input
        value={emailValue}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        labelName="email"
        labelTitle="Email address"
        errorMessage="Please enter a valid email address."
        isError={emailHasError}
      />
      <TextArea
        value={reviewValue}
        onChange={reviewChangeHandler}
        onBlur={reviewBlurHandler}
        labelName="feedback"
        labelTitle="Enter your feedback below:"
        errorMessage="Please leave feedback!"
        isError={reviewHasError}
      />
      <Rate stars={userStarRating} />
      <Button type="submit" color="primary">
        Submit
      </Button>
      <S.SubmitMessageWrapper>{message}</S.SubmitMessageWrapper>
    </S.FormWrapper>
  );
};

export default BasicForm;
