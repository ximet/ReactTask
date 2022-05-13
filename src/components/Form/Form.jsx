import React, { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { Button, Input, TextArea, Rate } from '../';
import { EMAIL_REGEXP, minStarLength } from '../../config/constants';
import { Storage } from '../../services/localStorage';
import { translations } from '../../utils/translations/';
import * as S from './Form.styles';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.match(EMAIL_REGEXP);
const isFeedbackEmpty = value => value.length;

const BasicForm = () => {
  const [message, setMessage] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
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
  } = useInput(isFeedbackEmpty);

  useEffect(() => {
    setFormIsValid(userNameIsValid && emailIsValid && reviewIsValid);
  }, [userName, emailValue, reviewValue]);

  const submitHandler = event => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    Storage.setReview({ userName, emailValue, reviewValue, rating });

    resetName();
    resetEmail();
    resetReview();
    setRating(0);
    setMessage(translations.msg_success_submit);
  };

  const formBlurHandler = () => {
    setMessage('');
  };

  const getUserRating = rateValue => {
    setRating(rateValue);
  };

  return (
    <S.FormWrapper onSubmit={submitHandler} onBlur={formBlurHandler}>
      <Input
        value={userName}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        labelName="name"
        labelTitle={translations.msg_user_name_label}
        errorMessage={translations.msg_user_name_error}
        isError={userNameHasError}
      />
      <Input
        value={emailValue}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        labelName="email"
        labelTitle={translations.msg_user_email_label}
        errorMessage={translations.msg_user_email_error}
        isError={emailHasError}
      />
      <TextArea
        value={reviewValue}
        onChange={reviewChangeHandler}
        onBlur={reviewBlurHandler}
        labelName="feedback"
        labelTitle={translations.msg_user_review_label}
        errorMessage={translations.msg_user_review_error}
        isError={reviewHasError}
      />
      <Rate value={rating} onChange={getUserRating} />
      <Button type="submit" color="destructive">
        {translations.msg_button_submit}
      </Button>
      <S.SubmitMessageWrapper>{message}</S.SubmitMessageWrapper>
    </S.FormWrapper>
  );
};

export default BasicForm;
