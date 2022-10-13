import { RootState } from 'redux/store';
import { ActionType, Action } from '../actionTypes/global';

export interface GlobalState {
  theme: string;
  sidebarOpen: boolean;
}

const initialState = {
  theme: 'light',
  sidebarOpen: false
};

const globalReducer = (state: GlobalState = initialState, action: Action): GlobalState => {
  switch (action.type) {
    case ActionType.SET_THEME: {
      return {
        ...state,
        theme: action.payload
      };
    }
    case ActionType.SET_SIDEBAR_OPEN: {
      return {
        ...state,
        sidebarOpen: action.payload
      };
    }
    default:
      return state;
  }
};

export default globalReducer;

export const selectTheme = (state: RootState) => state.global.theme;
