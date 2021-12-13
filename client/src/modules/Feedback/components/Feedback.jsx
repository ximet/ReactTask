import React from 'react';
import {
  changeEmailAC,
  changeMessageAC,
  changeNameAC,
  changePhoneAC,
  sendMessageAC
} from '../actions';

export function Feedback() {
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

export const mapDispatchToProps = dispatch => {
  return {
    changeName: name => dispatch(changeNameAC(name)),
    changeEmail: email => dispatch(changeEmailAC(email)),
    changePhone: phone => dispatch(changePhoneAC(phone)),
    changeMessage: message => dispatch(changeMessageAC(message)),
    sendMessage: () => dispatch(sendMessageAC)
  };
};
