import React, { FC, useContext, useEffect } from 'react';
import { layerSelector } from 'store/layer/layerSelectors';
import { useParams } from 'react-router-dom';

import Forecasts from './Forecasts';
import LayersButton from './LayersButton';
import AirQuality from './AirQuality';

import { LayerState } from 'store/layer/layerReducer';
import { positionContext } from 'context/positionContext';
import { useAppSelector } from 'store/hooks';

import commonStyle from 'styles/commonStyles.css';

const Main: FC = () => {
  const layer: LayerState = useAppSelector(layerSelector);

  const { coordinates } = useParams();

  const {
    state: { position },
    changePosition
  } = useContext(positionContext);

  useEffect(() => {
    const [paramLongitude, paramLatitude] = (coordinates || '').split(',');

    const resultLongitude = +paramLongitude || position.longitude;
    const resultLatitude = +paramLatitude || position.latitude;
    if (resultLongitude !== position.longitude || resultLatitude !== position.latitude) {
      changePosition(resultLatitude, resultLongitude);
    }
  }, [coordinates, position]);

  return (
    <main className={commonStyle.container}>
      <LayersButton />
      {layer === 'forecasts' && <Forecasts />}
      {layer === 'air' && <AirQuality />}
    </main>
  );
};

export default Main;
