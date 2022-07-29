import React from 'react';
import { useSelector } from 'react-redux';
import { CombinedState } from '../../../../store/index-redux';
import { TempUnits } from '../../../../store/tempUnits-redux';
import CreateLine from './CreateLine/CreateLine';
import CreateTempScale from './CreateTempScale/CreateTempScale';
import styles from './SvgBackground.module.scss';

const SvgBackground: React.FunctionComponent = () => {
  const tempUnit = useSelector<CombinedState, TempUnits>(state => state.tempUnit);

  return (
    <svg height={'400'} width={'1000'} className={styles.svgBackground}>
      <CreateTempScale
        coords={{ x: '0', y: '15' }}
        value={40}
        tempUnit={tempUnit}
        className={styles.tempScale}
      />
      <CreateTempScale
        coords={{ x: '0', y: '100' }}
        value={30}
        tempUnit={tempUnit}
        className={styles.tempScale}
      />
      <CreateTempScale
        coords={{ x: '0', y: '200' }}
        value={20}
        tempUnit={tempUnit}
        className={styles.tempScale}
      />
      <CreateTempScale
        coords={{ x: '0', y: '300' }}
        value={10}
        tempUnit={tempUnit}
        className={styles.tempScale}
      />
      <CreateTempScale
        coords={{ x: '0', y: '400' }}
        value={0}
        tempUnit={tempUnit}
        className={styles.tempScale}
      />

      <CreateLine
        coordsBeg={{ x1: '20', y1: '0' }}
        coordsEnd={{ x2: '1000', y2: '0' }}
        color={'#245f763b'}
      />
      <CreateLine
        coordsBeg={{ x1: '20', y1: '100' }}
        coordsEnd={{ x2: '1000', y2: '100' }}
        color={'#245f763b'}
      />
      <CreateLine
        coordsBeg={{ x1: '20', y1: '200' }}
        coordsEnd={{ x2: '1000', y2: '200' }}
        color={'#245f763b'}
      />
      <CreateLine
        coordsBeg={{ x1: '20', y1: '300' }}
        coordsEnd={{ x2: '1000', y2: '300' }}
        color={'#245f763b'}
      />
      <CreateLine
        coordsBeg={{ x1: '20', y1: '400' }}
        coordsEnd={{ x2: '1000', y2: '400' }}
        color={'#245f763b'}
      />
    </svg>
  );
};

export default SvgBackground;
