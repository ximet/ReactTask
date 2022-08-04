import { combineReducers, createStore, Reducer } from 'redux';
import { AuthContext, AuthContextConfig, AuthProvider } from './auth-context';
import LocationReducer, {
  LocationActionConfig,
  LocationActions,
  LocationState
} from './location-redux';
import TempUnitsReducer, { TempActionConfig, TempActions, TempUnits } from './tempUnits-redux';
import { Theme, ThemeContext, ThemeContextConfig, ThemeProvider } from './theme-context';

interface CombinedState {
  tempUnit: TempUnits;
  location: LocationState;
}

const reducer: Reducer<CombinedState, TempActionConfig | LocationActionConfig> = combineReducers({
  tempUnit: TempUnitsReducer,
  location: LocationReducer
});
const store = createStore(reducer);

export default store;

export {
  CombinedState,
  AuthContext,
  AuthContextConfig,
  AuthProvider,
  ThemeProvider,
  LocationReducer,
  LocationState,
  LocationActions,
  LocationActionConfig,
  Theme,
  ThemeContext,
  ThemeContextConfig,
  TempActions,
  TempUnits,
  TempActionConfig
};
