import { CHANGE_TEMPERATURE_UNIT } from 'actions';

const tempRecountFormulas = {
  C: initTemp => Math.round(initTemp),
  F: initTemp => Math.round(initTemp * 1.8 + 32),
  K: initTemp => Math.round(initTemp + 273),
};

const initState = {
  tempUnit: {
    name: 'Celsius',
    unit: 'C°',
    value: 'C',
  },
  tempRecountFormula: tempRecountFormulas.C,
};

const TemperatureUnitChangeReducer = (state = initState, { type, ...props }) => {
  switch (type) {
    case CHANGE_TEMPERATURE_UNIT: {
      return {
        tempUnit: props.tempUnit,
        tempRecountFormula: tempRecountFormulas[props.tempUnit.value],
      };
    }
    default: {
      return state;
    }
  }
};

export default TemperatureUnitChangeReducer;
