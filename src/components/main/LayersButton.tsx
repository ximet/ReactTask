import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { BsLayers } from 'react-icons/bs';
import { TiWeatherShower } from 'react-icons/ti';
import { MdAir } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { turnOnForecasts, turnOnAir } from 'store/layer/layerActions';

import styles from './Main.css';

const LayersButton: FC = () => {
  const [isShowLayers, setIsShowLayers] = useState<boolean>(false);

  const dispatch = useDispatch();

  const btnClickHandler = (action: { type: string }) => {
    dispatch(action);
    setIsShowLayers(false);
  };

  return (
    <div className={styles['layers-wrapper']}>
      <BsLayers onClick={() => setIsShowLayers(state => !state)} className={styles['layers-btn']} />
      <div
        className={classNames(
          styles['layers-btns-wrapper'],
          isShowLayers ? styles['show-btns'] : ''
        )}
      >
        <button className={styles['layer-btn']} onClick={() => btnClickHandler(turnOnForecasts())}>
          <TiWeatherShower /> Forecasts
        </button>
        <button className={styles['layer-btn']} onClick={() => btnClickHandler(turnOnAir())}>
          <MdAir /> Air Quality
        </button>
      </div>
    </div>
  );
};

export default LayersButton;
