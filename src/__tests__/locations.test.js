import cityReducer from '../redux/locations';
import { mockCityData } from '../__mocks__/mocks';

describe('theme reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const favCityList = [];
    const action = { type: '' };
    const result = cityReducer(favCityList, action);
    expect(result).toEqual([]);
  });
  it('should save city data object given initial state', () => {
    const favCityList = [];
    const cityName = 'Bucharest';
    const action = { type: 'SAVE_FAV_CITY', payload: cityName };
    const result = cityReducer(favCityList, action);
    expect(result).toEqual(['Bucharest']);
  });
  it('should delete corresponding data object when payload is found', () => {
    const favCityList = mockCityData;
    const action = { type: 'DELETE_FAV_CITY', payload: { locationData: { id: 100683506 } } };
    const result = cityReducer(favCityList, action);
    expect(result).toEqual(mockCityData.splice(1, 1));
  });
  it('should return current array when payload is not found', () => {
    const favCityList = mockCityData;
    const action = { type: 'DELETE_FAV_CITY', payload: { locationData: { id: 100524901 } } };
    const result = cityReducer(favCityList, action);
    expect(result).toEqual(mockCityData);
  });
});
