import React, { FC } from 'react';
import { layerSelector } from 'store/layer/layerSelectors';

import Forecasts from './Forecasts';
import LayersButton from './LayersButton';
import AirQuality from './AirQuality';

import { LayerState } from 'store/layer/layerReducer';
import { useAppSelector } from 'store/hooks';

import commonStyle from 'styles/commonStyles.css';

const Main: FC = () => {
  const layer: LayerState = useAppSelector(layerSelector);

  return (
    <main className={commonStyle.container} data-testid="main-page">
      <LayersButton />
      {layer === 'forecasts' && <Forecasts />}
      {layer === 'air' && <AirQuality />}
    </main>
  );
};

export default Main;
