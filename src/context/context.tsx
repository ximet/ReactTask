import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import { usePosition } from 'hooks/usePosition';
import { reducer } from './reducer';
import { CHANGE_POSITION } from './actions';
import { PositionContextState, PositionActionData } from './reducer';

type InitContextValuesType = {
  state: PositionContextState;
  changePosition: (lat: number, los: number) => void;
};

export const initValues: InitContextValuesType = {
  state: {
    position: {
      latitude: 0,
      longitude: 0
    },
    positionError: ''
  },
  changePosition: (lat: number, los: number) => {}
};

export const dataContext = createContext<InitContextValuesType>(initValues);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const { position, error } = usePosition();

  const { Provider } = dataContext;

  const [state, dispatch] = useReducer<
    (state: PositionContextState, { type, payload }: PositionActionData) => PositionContextState
  >(reducer, {
    position: {
      latitude: 0,
      longitude: 0
    },
    positionError: ''
  });

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
