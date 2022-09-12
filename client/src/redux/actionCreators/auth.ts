import axios from 'axios';
import { Dispatch } from 'redux';

import type { AuthorizationRequest, AuthorizationResponse, AuthenticationResponse } from 'types';
import { ActionType, Action } from '../actionTypes/auth';

export const authorize = (credentials: AuthorizationRequest) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionType.AUTHORIZE_PENDING });

  try {
    await axios.post<AuthorizationRequest, AuthorizationResponse>(
      'http://localhost:3000/authorize',
      credentials,
      { withCredentials: true }
    );
    dispatch({ type: ActionType.AUTHORIZE_SUCCESS });
  } catch (err) {
    if (err instanceof Error) {
      dispatch({ type: ActionType.AUTHORIZE_FAIL, payload: err.message });
    }
  }
};

export const authenticate = () => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.AUTHENTICATE_PENDING });

  let accessToken;
  try {
    const {
      data: { token }
    } = await axios.get<void, AuthenticationResponse>('http://localhost:3000/authenticate', {
      withCredentials: true
    });

    dispatch({ type: ActionType.AUTHENTICATE_SUCCESS, payload: token });
    accessToken = token;
  } catch (err) {
    if (err instanceof Error) {
      dispatch({ type: ActionType.AUTHENTICATE_FAIL, payload: err.message });
    }
  }

  return accessToken;
};
