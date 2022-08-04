import { getData } from './api';
import { convertToFahrenheit } from './convertToFahrenheit';
import { getUserLocation } from './geolocation';
import saveInLocalStorage from './localStorage';
import { emailRegEx, phoneRegEx } from './regex';

export {
  getData,
  convertToFahrenheit,
  getUserLocation,
  saveInLocalStorage,
  emailRegEx,
  phoneRegEx
};
