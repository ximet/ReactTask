import { combineReducers, createStore } from 'redux';
import aboutUs from './pages/AboutUs';

const rootReducer = combineReducers({
  [aboutUs.name]: aboutUs.reducer
});

const store = createStore(rootReducer);

export default store;
