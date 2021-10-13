import classes from './DailyForecasts.module.scss';

import DailyForecast from './DailyForecast/DailyForecast';

function DailyForecasts() {
  return (
    <div className={classes.forecastsContainer}>
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
    </div>
  );
}

export default DailyForecasts;
