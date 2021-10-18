// @flow
import type { HourlyForecastItemType } from '../../../../types/ForecastType';

export type HourlyForecastOwnPropsType = {
  locationId: string,
  currentHourlyForecast: Array<HourlyForecastItemType>
};

export type HourlyForecastPropsType = {
  ...HourlyForecastOwnPropsType,
  setCurrentHourlyForecast: (locationId: string) => void
};
