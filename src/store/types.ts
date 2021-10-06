import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type Store = typeof import('./index').default;
export type RootState = ReturnType<typeof import('./reducers').default>;

export type AppThunk<TPayload = unknown, ReturnType = void> = (
  payload: TPayload,
) => ThunkAction<ReturnType, RootState, unknown, AnyAction>;
