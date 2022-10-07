import React, { FC, useContext, useEffect } from 'react';
import { layerSelector } from 'store/layer/layerSelectors';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Forecasts from './Forecasts';
import LayersButton from './LayersButton';
import AirQuality from './AirQuality';

import { layerState } from 'store/layer/layerReducer';
import { positionContext } from 'context/positionContext';

import commonStyle from 'styles/commonStyles.css';

const Main: FC = () => {
  const layer: layerState = useSelector(layerSelector);

  const { coordinates } = useParams();
  const [paramLongitude, paramLatitude] = (coordinates || '').split(',');

  const {
    state: { position },
    changePosition
  } = useContext(positionContext);

  const resultLongitude = +paramLongitude || position.longitude;
  const resultLatitude = +paramLatitude || position.latitude;

  useEffect(() => {
    if (resultLongitude !== position.longitude || resultLatitude !== position.latitude) {
      changePosition(resultLatitude, resultLongitude);
    }
  }, [resultLongitude, position.longitude, resultLatitude, position.latitude]);

  return (
    <main className={commonStyle.container}>
      <LayersButton />
      {layer === 'forecasts' && <Forecasts />}
      {layer === 'air' && <AirQuality />}
    </main>
  );
};

export default Main;
