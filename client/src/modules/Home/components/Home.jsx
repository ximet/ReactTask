import React from 'react';
import {
  changeEmailAC,
  changeMessageAC,
  changeNameAC,
  changePhoneAC,
  sendMessageAC
} from '../../Feedback/actions';
import { changeTitleAC } from '../actions';

export function Home(props) {
  return (
    <>
      <h1>{props.title}</h1>

      <div>Hello Kseniya!</div>
      <button
        onClick={() => {
          props.changeTitle('Ghbdtn');
        }}
      >
        Click me!
      </button>
      <span>We will add some new components later</span>
    </>
  );
}

export const mapStateToProps = ({ home: { title } }) => {
  return {
    title
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    changeTitle: () => dispatch(changeTitleAC)
  };
};
