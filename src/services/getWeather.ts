import HTTPRequest from './httpService';

export type cityWeatherType = {
  current: {
    time: string;
    symbol: string;
    symbolPhrase: string;
    temperature: number;
    feelsLikeTemp: number;
    relHumidity: number;
    dewPoint: number;
    windSpeed: number;
    windDir: number;
    windDirString: string;
    windGust: number;
    precipProb: number;
    precipRate: number;
    cloudiness: number;
    thunderProb: number;
    uvIndex: number;
    pressure: number;
    visibility: number;
  };
};

export const getCityWeather = async (
  longitude: number,
  latitude: number
): Promise<cityWeatherType> => {
  const current = await HTTPRequest(`/current/${longitude},${latitude}`, {});
  return current;
};
