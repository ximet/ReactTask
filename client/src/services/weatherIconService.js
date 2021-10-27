import dailyPartlyCloudy from '../../public/images/weatherIcon/dailyPartlyCloudy.png';
import dailyClear from '../../public/images/weatherIcon/dailyClear.png';
import rain from '../../public/images/weatherIcon/rain.png';
import overcast from '../../public/images/weatherIcon/overcast.png';
import nightlyClear from '../../public/images/weatherIcon/nightlyClear.png';
import nightlyPartlyCloudy from '../../public/images/weatherIcon/nightlyPartlyCloudy.png';
import showers from '../../public/images/weatherIcon/showers.png';
import { AnteMeridianAbbreviation, postMeridianAbbreviation, middayHours } from '../globalConsts';

export const dailyWeatherIcons = {
  clear: dailyClear,
  'partly cloudy': dailyPartlyCloudy,
  'mostly clear': dailyClear,
  showers: showers,
  rain: rain,
  'light rain': rain,
  overcast: overcast,
  cloudy: overcast
};

export const nightlyWeatherIcons = {
  clear: nightlyClear,
  'partly cloudy': nightlyPartlyCloudy,
  'mostly clear': nightlyClear,
  showers: showers,
  rain: rain,
  'light rain': rain,
  overcast: overcast,
  cloudy: overcast
};

export const getWeatherIcon = (
  symbolPhrase,
  currentHours = middayHours,
  dayPart = postMeridianAbbreviation
) => {
  return (((currentHours >= 1 && currentHours <= 6) || currentHours == 12) &&
    dayPart == AnteMeridianAbbreviation) ||
    (currentHours >= 9 && currentHours < 11 && dayPart == postMeridianAbbreviation)
    ? nightlyWeatherIcons[symbolPhrase]
    : dailyWeatherIcons[symbolPhrase];
};
