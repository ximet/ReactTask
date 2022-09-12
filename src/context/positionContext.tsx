import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import { usePosition } from 'hooks/usePosition';
import { reducer } from './positionReducer';
import { CHANGE_POSITION } from './positionActions';
import { PositionContextState, PositionActionData } from './positionReducer';

type PositionContextValuesType = {
  state: PositionContextState;
  changePosition: (lat: number, los: number) => void;
};

const contextValues: PositionContextValuesType = {
  state: {
    position: {
      latitude: 0,
      longitude: 0
    },
    positionError: ''
  },
  changePosition: (lat: number, los: number) => {}
};

export const positionContext = createContext<PositionContextValuesType>(contextValues);

export const PositionContextProvider = ({ children }: { children: ReactNode }) => {
  const { position, error } = usePosition();

  const { Provider } = positionContext;

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
