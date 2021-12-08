import { createReducer } from '@reduxjs/toolkit';
import { changeTitle } from '../actions';

const INITIAL_STATE = {
  title: 'About Us',
  paragraph: 'lorem ipsum bla bla bla'
};

export default createReducer(INITIAL_STATE, {
  [changeTitle]: state => {
    state.title = 'Hello';
  }
});

export const getTitle = state => state.aboutUs.title;
