import { SET_CURRENT_CITY } from '../constants';

export const setCurrentCity = city => ({
    type: SET_CURRENT_CITY,
    city
});