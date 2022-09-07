import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import { usePosition } from 'hooks/usePosition';
import { reducer } from './reducer';
import { CHANGE_POSITION } from './actions';
import { State, ActionData } from './reducer';

type InitStateType = {
  state: {
    position: {
      latitude: number;
      longitude: number;
    };
    positionError: string;
  };
  changePosition: (lat: number, los: number) => void;
};

export const initState: InitStateType = {
  state: {
    position: {
      latitude: 0,
      longitude: 0
    },
    positionError: ''
  },
  changePosition: (lat: number, los: number) => {}
};

export const dataContext = createContext<InitStateType>(initState);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const { position, error } = usePosition();

  const { Provider } = dataContext;

  const [state, dispatch] = useReducer<(state: State, { type, payload }: ActionData) => State>(
    reducer,
    {
      position: {
        latitude: 0,
        longitude: 0
      },
      positionError: ''
    }
  );

  const changePosition = (lat: number, los: number) => {
    dispatch({
      type: CHANGE_POSITION,
      payload: {
        ...state,
        position: {
          latitude: lat,
          longitude: los
        }
      }
    });
  };

  useEffect(() => {
    changePosition(position.latitude, position.longitude);
  }, [position.latitude]);

  return <Provider value={{ state, changePosition }}>{children}</Provider>;
};
