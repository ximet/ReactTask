import type { AccessToken } from '../../types';

export enum ActionType {
  AUTHORIZE_PENDING = 'AUTHORIZE_PENDING',
  AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS',
  AUTHORIZE_FAIL = 'AUTHORIZE_FAIL',

  AUTHENTICATE_PENDING = 'AUTHENTICATE_PENDING',
  AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS',
  AUTHENTICATE_FAIL = 'AUTHENTICATE_FAIL'
}

interface ActionPending {
  type: ActionType.AUTHORIZE_PENDING | ActionType.AUTHENTICATE_PENDING;
}

interface ActionSuccess {
  type: ActionType.AUTHORIZE_SUCCESS | ActionType.AUTHENTICATE_SUCCESS;
  payload?: AccessToken;
}

interface ActionFail {
  type: ActionType.AUTHORIZE_FAIL | ActionType.AUTHENTICATE_FAIL;
  payload: string;
}

export type Action = ActionPending | ActionSuccess | ActionFail;
