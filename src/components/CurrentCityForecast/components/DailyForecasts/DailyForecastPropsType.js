// @flow
import type { DailyForecastArrayType } from '../../../../types/ForecastType';

export type DailyForecastOwnPropsType = {
  locationId: string
};

export type DailyForecastPropsType = {
  ...DailyForecastOwnPropsType,
  isLoading: Boolean,
  currentDailyForecast: DailyForecastArrayType,
  setCurrentDailyForecast: (location: string) => void
};
