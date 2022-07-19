import { createStore } from 'redux';

export enum tempUnits {
  CELSIUS = 'celsius',
  FAHRENHEIT = 'fahrenheit'
}
export enum tempActions {
  TO_FAHRENHEIT = 'toFahrenheit',
  TO_CELSIUS = 'toCelsius'
}
export interface Action {
  type: string;
}
const getTempUnits = (): tempUnits => {
  const tempUnit: string | null = localStorage.getItem('tempUnit');
  if (!tempUnit || tempUnit === tempUnits.CELSIUS) {
    return tempUnits.CELSIUS;
  } else {
    return tempUnits.FAHRENHEIT;
  }
};
const initialState: tempUnits = getTempUnits();

const tempUnitsReducer = (state = initialState, action: Action) => {
  if (action.type === tempActions.TO_FAHRENHEIT) {
    localStorage.setItem('tempUnit', tempUnits.FAHRENHEIT);
    return (state = tempUnits.FAHRENHEIT);
  }
  if (action.type === tempActions.TO_CELSIUS) {
    localStorage.setItem('tempUnit', tempUnits.CELSIUS);
    return (state = tempUnits.CELSIUS);
  }
  return state;
};

const store = createStore(tempUnitsReducer);

export default store;
