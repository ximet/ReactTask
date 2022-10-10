// Types
import { Feedback } from 'types';

export enum ActionType {
  ADD_FEEDBACK_PENDING = 'ADD_FEEDBACK_PENDING',
  ADD_FEEDBACK_SUCCESS = 'ADD_FEEDBACK_SUCCESS',
  ADD_FEEDBACK_FAIL = 'ADD_FEEDBACK_FAIL'
}

interface ActionPending {
  type: ActionType.ADD_FEEDBACK_PENDING;
}

interface ActionSuccess {
  type: ActionType.ADD_FEEDBACK_SUCCESS;
  payload: Feedback;
}

interface ActionFail {
  type: ActionType.ADD_FEEDBACK_FAIL;
  payload: string;
}

export type Action = ActionPending | ActionSuccess | ActionFail;
