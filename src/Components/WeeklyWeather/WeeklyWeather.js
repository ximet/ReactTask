import WeeklyWeatherItem from './WeeklyWeatherItem/WeeklyWeatherItem';

const WeeklyWeather = props => {
  return props.weather.map((item, index) => {
    return <WeeklyWeatherItem key={item.date} id={index} item={item} />;
  });
};

export default WeeklyWeather;
