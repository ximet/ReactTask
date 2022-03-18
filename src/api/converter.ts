import {
  CurrentWeatherinterface,
  LocationInfoInterface,
  NextWeekWeatherItemInterface,
  TodaysWeatherItemInterface,
} from '../interfaces/interfaces';

const convert = {
  toLocationInfo(data: any) :LocationInfoInterface {
    return {
      name: String(data.name),
      country: String(data.country),
      lon: String(data.lon),
      lat: String(data.lat),
    };
  },

  toCurrentWeather(data: any) : CurrentWeatherinterface {
    return {
      time: new Date(data.time),
      symbol: String(data.symbol),
      temperature: Number(data.temperature),
      symbolPhrase: String(data.symbolPhrase),
      windSpeed: Number(data.windSpeed),
      cloudiness: Number(data.cloudiness),
      pressure: Number(data.pressure),
      visibility: Number(data.visibility),
      relHumidity: Number(data.relHumidity),
      windGust: Number(data.windGust),
    };
  },

  toTodaysWeather(data: any) : TodaysWeatherItemInterface[] {
    return data.map((item: any) => ({
      time: new Date(item.time),
      temperature: String(item.temperature),
      symbol: String(item.symbol),
    }));
  },

  toNextWeekWeather(data: any) : NextWeekWeatherItemInterface[] {
    return data.map((item: any) => ({
      time: String(item.time),
      symbol: String(item.symbol),
      maxTemp: Number(item.maxTemp),
      minTemp: Number(item.minTemp),
      maxWindSpeed: Number(item.maxWindSpeed),
      precipAccum: Number(item.precipAccum),
      windDir: Number(item.windDir),
    }));
  },
};

export default convert;
