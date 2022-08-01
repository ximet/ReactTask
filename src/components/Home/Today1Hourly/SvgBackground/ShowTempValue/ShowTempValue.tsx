import React from 'react';
import { connect } from 'react-redux';
import { convertToFahrenheit } from '../../../../../helpers/convertToFahrenheit';
import { CombinedState } from '../../../../../store/index-redux';
import { TempUnits } from '../../../../../store/tempUnits-redux';
import styles from './ShowTempValue.module.scss';

interface ShowTempValueProps {
  coords: { x: string; y: string };
  value: number;
  tempUnit: TempUnits;
  classname?: string;
}

class ShowTempValue extends React.Component<ShowTempValueProps> {
  render() {
    const { coords, classname = `${styles.tempScale}`, tempUnit, value } = this.props;
    return (
      <text x={coords.x} y={coords.y} className={classname}>
        {tempUnit === TempUnits.FAHRENHEIT ? `${convertToFahrenheit(value)} °F` : `${value} °C`}
      </text>
    );
  }
}

const mapStateToProps = (state: CombinedState): { tempUnit: TempUnits } => {
  return {
    tempUnit: state.tempUnit
  };
};

export default connect(mapStateToProps)(ShowTempValue);
