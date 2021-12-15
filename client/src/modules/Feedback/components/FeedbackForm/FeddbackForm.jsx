import React from 'react';
import { Box } from '@mui/material';
import * as S from '../../style';
import TextField from '../TextField';

export function FeedbackForm(props) {
  return (
    <S.GridItem sm={6} md={6} item>
      <S.Paragraph component={'p'} m="0 0 10px 8px" align='justify'>
        You can contact us with anything related to our Products. We'll get in touch with you as
        soon as possible.
      </S.Paragraph>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          error={props.name.error}
          defaultValue={props.name.defaultValue}
          value={props.name.value}
          onChangeHandler={props.changeName}
        />
        <TextField
          error={props.phone.error}
          defaultValue={props.phone.defaultValue}
          value={props.phone.value}
          onChangeHandler={props.changePhone}
        />
        <TextField
          error={props.email.error}
          defaultValue={props.email.defaultValue}
          value={props.email.value}
          onChangeHandler={props.changeEmail}
        />
        <TextField
          error={props.message.error}
          defaultValue={props.message.defaultValue}
          value={props.message.value}
          onChangeHandler={props.changeMessage}
          multiline='true'
          rows={4}
        />

        <S.Button disabled={props.isSending} variant="contained" onClick={props.sendMessage}>
          CONTACT US
        </S.Button>
      </Box>
    </S.GridItem>
  );
}
