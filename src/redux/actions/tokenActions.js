import { SET_TOKEN } from '../types/tokenTypes';

const setToken = token => {
  return {
    type: SET_TOKEN,
    payload: {
      token
    }
  };
};

export { setToken };
