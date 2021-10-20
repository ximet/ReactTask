// @flow
import type { DailyForecastArrayType } from '../../../../types/ForecastType';

export type DailyForecastOwnPropsType = {
  locationId: string,
  currentDailyForecast: DailyForecastArrayType
};

export type DailyForecastPropsType = {
  ...DailyForecastOwnPropsType,
  setCurrentDailyForecast: (location: string) => void
};
