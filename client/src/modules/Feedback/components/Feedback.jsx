import React from 'react';
import { Box, TextField } from '@mui/material';
import { BORDER_INPUT_COLOR } from '../../../app_data/styles_info';
import { changeMessage } from '../actions';

export function Feedback(props) {
  console.log(props);
  return (
    <>
      <div>Hello Kseniya!</div>
      <span>We will add Feedback component later</span>
    </>
  );
}

export const mapStateToProps = ({ feedback: { name, email, phone, message } }) => {
  return {
    name,
    email,
    phone,
    message
  };
};
