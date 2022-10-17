import React, { createContext, ReactNode, useEffect, useReducer, Reducer } from 'react';
import { usePosition } from 'hooks/usePosition';
import { reducer } from './positionReducer';
import { CHANGE_POSITION } from './positionActions';
import { PositionContextState, PositionActionData } from './positionReducer';
import { useParams } from 'react-router-dom';

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
  const { coordinates } = useParams();
  const { position, error } = usePosition();

  const { Provider } = positionContext;

  const [state, dispatch] = useReducer<Reducer<PositionContextState, PositionActionData>>(reducer, {
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
    const [paramLongitude, paramLatitude] = (coordinates || '').split(',');

    const resultLongitude = +paramLongitude || position.longitude;
    const resultLatitude = +paramLatitude || position.latitude;

    if (position.latitude || position.latitude) {
      changePosition(resultLatitude, resultLongitude);
    }
  }, [position]);

  const latitude = state.position.latitude;
  const longitude = state.position.longitude;

  return (
    <Provider value={{ state, changePosition }}>
      <>
        {(latitude || longitude) && children}
        {error && <>Error in position: {error}</>}
      </>
    </Provider>
  );
};
