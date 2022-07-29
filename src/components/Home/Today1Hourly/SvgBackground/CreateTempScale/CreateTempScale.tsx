import React from 'react';
import { convertToFahrenheit } from '../../../../../helpers/convertToFahrenheit';
import { TempUnits } from '../../../../../store/tempUnits-redux';

interface CreateTempScaleProps {
  coords: { x: string; y: string };
  value: number;
  tempUnit: TempUnits;
  className: string;
}

const CreateTempScale: React.FunctionComponent<CreateTempScaleProps> = ({
  coords,
  value,
  tempUnit,
  className
}) => {
  return (
    <text x={coords.x} y={coords.y} className={className}>
      {tempUnit === TempUnits.FAHRENHEIT ? `${convertToFahrenheit(value)} °F` : `${value} °C`}
    </text>
  );
};

export default CreateTempScale;
