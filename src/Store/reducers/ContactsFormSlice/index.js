import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const contactsFormSlice = createSlice({
  name: 'contactsForm',
  initialState: initialState,
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
      state.nameIsValid = action.payload.trim().length > 0;
    },
    changeEmail(state, action) {
      state.email = action.payload;
      state.emailIsValid = 
      action.payload.trim().length > 0 && 
      action.payload.indexOf('@') > -1 &&
      action.payload.indexOf('.') > -1;
    },
    changeMessage(state, action) {
      state.message = action.payload;
    },
    clearForm(state) {
      state.name = '';
      state.nameIsValid = false;
      state.email = '';
      state.emailIsValid = false;
      state.message = '';
    },
  }
})

export const contactsFormActions = contactsFormSlice.actions;

export default contactsFormSlice.reducer
