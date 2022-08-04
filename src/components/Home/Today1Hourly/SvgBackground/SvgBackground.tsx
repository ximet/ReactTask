import { CreateLine, ShowTempValue } from 'components';
import React from 'react';
import styles from './SvgBackground.module.scss';

class SvgBackground extends React.Component {
  render() {
    return (
      <svg height={'400'} width={'1000'} className={styles.svgBackground}>
        <ShowTempValue coords={{ x: '0', y: '15' }} value={40} />
        <ShowTempValue coords={{ x: '0', y: '100' }} value={30} />
        <ShowTempValue coords={{ x: '0', y: '200' }} value={20} />
        <ShowTempValue coords={{ x: '0', y: '300' }} value={10} />
        <ShowTempValue coords={{ x: '0', y: '400' }} value={0} />

        <CreateLine coordsBeg={{ x1: '20', y1: '0' }} coordsEnd={{ x2: '1000', y2: '0' }} />
        <CreateLine coordsBeg={{ x1: '20', y1: '100' }} coordsEnd={{ x2: '1000', y2: '100' }} />
        <CreateLine coordsBeg={{ x1: '20', y1: '200' }} coordsEnd={{ x2: '1000', y2: '200' }} />
        <CreateLine coordsBeg={{ x1: '20', y1: '300' }} coordsEnd={{ x2: '1000', y2: '300' }} />
        <CreateLine coordsBeg={{ x1: '20', y1: '400' }} coordsEnd={{ x2: '1000', y2: '400' }} />
      </svg>
    );
  }
}

export default SvgBackground;
