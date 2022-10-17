import { getTimeLabel } from 'utils/helpers';
import { WeatherType } from './HourlySection';

export const getHourLabels = (weather: WeatherType, middleLabelsCount: number): string[] => {
  const labels: string[] = [];

  const step = Math.floor(weather.length / (middleLabelsCount + 1));

  const firstEl = weather.at(0);
  const lastEl = weather.at(-1);

  labels.push(getTimeLabel(firstEl!.time));

  for (let i = step - 1; i < weather.length - step; i = i + step) {
    labels.push(getTimeLabel(weather[i].time));
  }

  labels.push(getTimeLabel(lastEl!.time));

  return labels;
};
