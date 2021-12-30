import React from 'react';
import { Box } from '@mui/material';
import * as S from '../../style';
import TextField from '../TextField';
import PropTypes from 'prop-types';

export function FeedbackForm(props) {
  return (
    <S.GridItem sm={6} md={6} item>
      <S.Paragraph component={'p'} m="0 0 10px 8px" align="justify">
        You can contact us with anything related to our Products. We'll get in touch with you as
        soon as possible.
      </S.Paragraph>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          name="name"
          error={props.name.error}
          defaultValue={props.name.defaultValue}
          value={props.name.value}
          onChangeHandler={props.changeName}
          onBlurHandler={props.validateField}
        />
        <TextField
          name="phone"
          error={props.phone.error}
          defaultValue={props.phone.defaultValue}
          value={props.phone.value}
          onChangeHandler={props.changePhone}
          onBlurHandler={props.validateField}
        />
        <TextField
          name="email"
          error={props.email.error}
          defaultValue={props.email.defaultValue}
          value={props.email.value}
          onChangeHandler={props.changeEmail}
          onBlurHandler={props.validateField}
        />
        <TextField
          name="message"
          error={props.message.error}
          defaultValue={props.message.defaultValue}
          value={props.message.value}
          onChangeHandler={props.changeFeedbackMessage}
          onBlurHandler={props.validateField}
          multiline={true}
          rows={4}
        />
        <S.Button
          name="form"
          disabled={props.isSending}
          variant="contained"
          onClick={e => props.sendMessage(e.target.name)}
        >
          CONTACT US
        </S.Button>
      </Box>
    </S.GridItem>
  );
}

FeedbackForm.propTypes = {
  changeName: PropTypes.func.isRequired,
  validateField: PropTypes.func.isRequired,
  changePhone: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changeFeedbackMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  name: PropTypes.shape({
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    error: PropTypes.string
  }),
  email: PropTypes.shape({
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    error: PropTypes.string
  }),
  phone: PropTypes.shape({
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    error: PropTypes.string
  }),
  message: PropTypes.shape({
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    error: PropTypes.string
  }),
  isSending: PropTypes.bool
};
