interface NextWeekWeatherItemInterface {
  date: string,
  symbol: string,
  maxTemp: number,
  minTemp: number,
  maxWindSpeed: number,
  precipAccum: number,
  windDir: number,
}

interface LocationInfoInterface {
  name: string,
  country: string,
  lon: string,
  lat: string,
}

interface LocationSearchItemInterface {
  id: number,
  name: string,
  country: string,
  state: string,
  timezone: string,
  adminArea: string,
  lon: number,
  lat: number,
}

interface CurrentWeatherinterface {
  time: Date,
  symbol: string,
  temperature: number,
  symbolPhrase: string,
  windSpeed: number,
  cloudiness: number,
  pressure: number,
  visibility: number,
  relHumidity: number,
  windGust: number,
}

interface TodaysWeatherItemInterface {
  time: Date,
  temperature: number,
  symbol: string,
}

export {
  NextWeekWeatherItemInterface,
  LocationInfoInterface,
  LocationSearchItemInterface,
  CurrentWeatherinterface,
  TodaysWeatherItemInterface,
};
