// Constants
import { STORE_STATE_LS_LABEL } from '../constants';

export function loadState<T = object>(): T | undefined {
  if (!localStorage) {
    return;
  }

  try {
    const serializedState = localStorage.getItem(STORE_STATE_LS_LABEL);
    if (serializedState == null) {
      return;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    throw new Error('Store deserialization failed');
  }
}

export function saveState<T = object>(storeState: T): boolean {
  if (!localStorage) {
    return false;
  }

  try {
    const serializedState = JSON.stringify(storeState);
    localStorage.setItem(STORE_STATE_LS_LABEL, serializedState);
    return true;
  } catch (error) {
    throw new Error('Store serialization failed');
  }
}
