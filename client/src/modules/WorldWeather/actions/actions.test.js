import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getCurrentLocationWeather, onSearchClick, onSelectCountry } from './thunks';
import {
  changeSearchValue,
  clearCountryList,
  clearSearchValue,
  searchingFinished,
  searchingStart,
  setCountryList,
  setSelectedCountry
} from './index';
import { weatherApi } from '../../../weatherAPI';

jest.mock('../../../weatherAPI');

const mockStore = configureStore([thunk]);
const store = mockStore({
  worldWeather: {
    searchValue: 'Hrodna,Belarus',
    countryList: [
      {
        id: 100627904,
        name: 'Hrodna',
        country: 'Belarus',
        timezone: 'Europe/Minsk',
        adminArea: 'Grodnenskaya',
        lon: 23.814722061,
        lat: 53.681388855
      }
    ],
    selectedCountry: null,
    isSearchingStart: false
  }
});
const weatherAPIMock = weatherApi;

weatherAPIMock.getFullCityForecast.mockReturnValue({ now: {}, daily: [], countryInfo: {} });
weatherAPIMock._getCurrentLocationCoords.mockReturnValue({ lon: 11, lat: 12 });
weatherAPIMock._searchCity.mockReturnValue({});
weatherAPIMock._getTodaysWeather.mockReturnValue({});
weatherAPIMock._getDailyWeather.mockReturnValue([]);
weatherAPIMock.searchCityByQuery.mockReturnValue([]);

describe('Test WorldWeather thunk actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should return currentLocationWeather', async () => {
    await store.dispatch(getCurrentLocationWeather());
    let expectedActions = [setSelectedCountry({ now: {}, daily: [], countryInfo: {} })];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should return selectedCountryWeather', async () => {
    await store.dispatch(onSelectCountry());
    let expectedActions = [
      setSelectedCountry({ now: {}, daily: [], countryInfo: {} }),
      clearCountryList(),
      clearSearchValue()
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should change countryList according to input search value', async () => {
    await store.dispatch(onSearchClick('Hrodna,Belarus'));
    let expectedActions = [
      changeSearchValue('Hrodna,Belarus'),
      searchingStart(true),
      setCountryList([]),
      searchingFinished(false)
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
describe('Test WorldWeather simple actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Dispatches "CHANGE_SEARCH_VALUE"', async () => {
    store.dispatch(changeSearchValue('Minsk'));
    let expectedActions = [{ type: 'WORLD_WEATHER/CHANGE_SEARCH_VALUE', payload: 'Minsk' }];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches "SET_COUNTRY_LIST"', async () => {
    store.dispatch(setCountryList([]));
    let expectedActions = [{ type: 'WORLD_WEATHER/SET_COUNTRY_LIST', payload: [] }];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches "SEARCHING_START"', async () => {
    store.dispatch(searchingStart(true));
    let expectedActions = [{ type: 'WORLD_WEATHER/SEARCHING_START', payload: true }];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches "SEARCHING_FINISHED"', async () => {
    store.dispatch(searchingFinished(false));
    let expectedActions = [{ type: 'WORLD_WEATHER/SEARCHING_FINISHED', payload: false }];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches "SET_SELECTED_COUNTRY" according choose country', async () => {
    store.dispatch(setSelectedCountry({ now: {}, daily: [], countryInfo: {} }));
    let expectedActions = [
      {
        type: 'WORLD_WEATHER/SET_SELECTED_COUNTRY',
        payload: { now: {}, daily: [], countryInfo: {} }
      }
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches "CLEAR_COUNTRY_LIST" after selecting country', async () => {
    store.dispatch(clearCountryList());
    let expectedActions = [{ type: 'WORLD_WEATHER/CLEAR_COUNTRY_LIST', payload: null }];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Dispatches "CLEAR_SEARCH_VALUE" after selecting country', async () => {
    store.dispatch(clearSearchValue());
    let expectedActions = [{ type: 'WORLD_WEATHER/CLEAR_SEARCH_VALUE', payload: null }];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
