import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import { usePosition } from 'hooks/usePosition';
import { reducer } from './reducer';
import { CHANGE_POSITION } from './actions';

export const initState = {
  position: {
    latitude: 0,
    longitude: 0
  },
  positionError: '',
  changePosition: (lat: number, los: number) => {}
};

export const dataContext = createContext(initState);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const { position, error } = usePosition();

  const { Provider } = dataContext;

  const [state, dispatch] = useReducer(reducer, initState);

  state.changePosition = (lat, los) => {
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
    state.changePosition(position.latitude, position.longitude);
  }, [position.latitude]);

  return <Provider value={state}>{children}</Provider>;
};
