import axios, { Method, AxiosResponse } from 'axios';
import { Action, Dispatch } from 'redux';

import { BASE_URL } from '../constants';

export const dispatchAsyncReq = <T, U, W>(
  endpoint: string,
  method: Method,
  data: U,
  ActionPending: any,
  ActionSuccess: any,
  ActionFail: any
) => async (dispatch: Dispatch<Action<T>>): Promise<AxiosResponse<W> | null> => {
  dispatch({ type: ActionPending });

  try {
    const res: AxiosResponse<W> = await axios({
      method,
      url: `${BASE_URL}/${endpoint}`,
      data,
      withCredentials: true
    });

    dispatch({ type: ActionSuccess, payload: res });

    return res;
  } catch (err) {
    if (err instanceof Error) {
      dispatch({ type: ActionFail, payload: err.message });
    }
  }

  return null;
};
