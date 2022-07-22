export enum TempUnits {
  CELSIUS = 'celsius',
  FAHRENHEIT = 'fahrenheit'
}
export enum TempActions {
  TO_FAHRENHEIT = 'toFahrenheit',
  TO_CELSIUS = 'toCelsius'
}
export interface TempActionConfig {
  type: string;
}
const getTempUnits = (): TempUnits => {
  const tempUnit: string | null = localStorage.getItem('tempUnit');
  if (!tempUnit || tempUnit === TempUnits.CELSIUS) {
    return TempUnits.CELSIUS;
  } else {
    return TempUnits.FAHRENHEIT;
  }
};
const initialState: TempUnits = getTempUnits();

const TempUnitsReducer = (state: TempUnits = initialState, action: TempActionConfig) => {
  if (action.type === TempActions.TO_FAHRENHEIT) {
    localStorage.setItem('tempUnit', TempUnits.FAHRENHEIT);
    return TempUnits.FAHRENHEIT;
  }
  if (action.type === TempActions.TO_CELSIUS) {
    localStorage.setItem('tempUnit', TempUnits.CELSIUS);
    return TempUnits.CELSIUS;
  }
  return state;
};

export default TempUnitsReducer;
