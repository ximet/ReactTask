import { FEEDBACK } from '../components/constants';

export const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem(FEEDBACK, JSON.stringify(getState()));
    return result;
  };
};

export const refreshFromLocalStorage = () => {
  if (localStorage.getItem(FEEDBACK) !== null) {
    return JSON.parse(localStorage.getItem(FEEDBACK));
  }
};
