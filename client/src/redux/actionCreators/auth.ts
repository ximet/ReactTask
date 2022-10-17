import { dispatchAsyncReq } from 'redux/utils';
import type { AuthorizationRequest, AuthorizationResponse, AuthenticationResponse } from 'types';
import { ActionType, Action } from '../actionTypes/auth';

export const authorize = (credentials: AuthorizationRequest) =>
  dispatchAsyncReq<Action, AuthorizationRequest, AuthorizationResponse>({
    endpoint: 'authorize',
    method: 'post',
    data: credentials,
    ActionPending: ActionType.AUTHORIZE_PENDING,
    ActionSuccess: ActionType.AUTHORIZE_SUCCESS,
    ActionFail: ActionType.AUTHORIZE_FAIL
  });

export const authenticate = () =>
  dispatchAsyncReq<Action, null, AuthenticationResponse>({
    endpoint: 'authenticate',
    method: 'get',
    ActionPending: ActionType.AUTHENTICATE_PENDING,
    ActionSuccess: ActionType.AUTHENTICATE_SUCCESS,
    ActionFail: ActionType.AUTHENTICATE_FAIL
  });
