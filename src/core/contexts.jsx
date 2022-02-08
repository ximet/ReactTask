import { createContext } from 'react';

const SnackbarContext = createContext({ isOpen: false, message: '' });
const WorldWeatherContext = createContext({ worldWeather: [], setWeather: () => {} });

export { SnackbarContext, WorldWeatherContext };
