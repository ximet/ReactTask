import { createSelector } from 'reselect';

export const getName = state => ({ ...state.feedback.name });
export const getEmail = state => ({ ...state.feedback.email });
export const getPhone = state => ({ ...state.feedback.phone });
export const getMessage = state => ({ ...state.feedback.message });

export const getFormData = createSelector(
  [getName, getPhone, getEmail, getMessage],
  ({ value: name }, { value: phone }, { value: email }, { value: message }) => {
    return {
      name,
      phone,
      email,
      message
    };
  }
);
