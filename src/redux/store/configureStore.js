import { createStore } from 'redux';
import weatherReducer from '../reducers/weatherReducer';

export default createStore(weatherReducer);
