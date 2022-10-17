import { AirQualityType } from './airQualityType';
import { HourlyWeatherType } from './weatherTypes';

export type UnionHourlyWeatherType = (HourlyWeatherType | AirQualityType)[];
