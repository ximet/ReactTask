import { dispatchAsyncReq } from 'redux/utils';
import type { AuthorizationRequest, AuthorizationResponse, AuthenticationResponse } from 'types';
import { ActionType, Action } from '../actionTypes/auth';

export const authorize = (credentials: AuthorizationRequest) =>
  dispatchAsyncReq<Action, AuthorizationRequest, AuthorizationResponse>(
    'authorize',
    'post',
    credentials,
    ActionType.AUTHORIZE_PENDING,
    ActionType.AUTHORIZE_SUCCESS,
    ActionType.AUTHORIZE_FAIL
  );

export const authenticate = () =>
  dispatchAsyncReq<Action, null, AuthenticationResponse>(
    'authenticate',
    'get',
    null,
    ActionType.AUTHENTICATE_PENDING,
    ActionType.AUTHENTICATE_SUCCESS,
    ActionType.AUTHENTICATE_FAIL
  );
