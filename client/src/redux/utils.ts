import axios, { Method, AxiosResponse } from 'axios';
import { Action, Dispatch } from 'redux';

import { BASE_URL } from '../constants';

interface dispatchAsyncReqProps<U> {
  endpoint: string;
  method: Method;
  data?: U;
  ActionPending: any;
  ActionSuccess: any;
  ActionFail: any;
}

export const dispatchAsyncReq = <T, U, W>({
  endpoint,
  method,
  data,
  ActionPending,
  ActionSuccess,
  ActionFail
}: dispatchAsyncReqProps<U>) => async (
  dispatch: Dispatch<Action<T>>
): Promise<AxiosResponse<W> | null> => {
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
