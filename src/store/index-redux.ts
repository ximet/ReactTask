import { combineReducers, createStore, Reducer } from 'redux';
import LocationReducer, { LocationActionConfig, LocationState } from './location-redux';
import TempUnitsReducer, { TempActionConfig, TempUnits } from './tempUnits-redux';

export interface CombinedState {
  tempUnit: TempUnits;
  location: LocationState;
}

const reducer: Reducer<CombinedState, TempActionConfig | LocationActionConfig> = combineReducers({
  tempUnit: TempUnitsReducer,
  location: LocationReducer
});
const store = createStore(reducer);
export default store;
