// @flow
import type { HourlyForecastItemType } from '../../../../types/ForecastType';

export type HourlyForecastOwnPropsType = {
  locationId: string
};

export type HourlyForecastPropsType = {
  ...HourlyForecastOwnPropsType,
  isLoading: Boolean,
  currentHourlyForecast: Array<HourlyForecastItemType>,
  setCurrentHourlyForecast: (locationId: string) => void
};
