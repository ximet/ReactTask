import worldWeatherReducer from './WorldWeatherReducer';
import {
  changeSearchValue,
  setCountryList,
  searchingStart,
  searchingFinished,
  setSelectedCountry,
  clearCountryList,
  clearSearchValue
} from '../actions';

describe('Test WorldWeather reducer', () => {

  it('Should change searchValue', () => {
    let action = changeSearchValue('Minsk');
    let state = {
      searchValue: ''
    };

    let newState = worldWeatherReducer(state, action);
    expect(newState.searchValue).toBe('Minsk');
  });

  it('Should clear searchValue', () => {
    let action = clearSearchValue();
    let state = {
      searchValue: 'Minsk'
    };
    let newState = worldWeatherReducer(state, action);

    expect(newState.searchValue).toBe('');
  });

  it('Should add countries to countryList', () => {
    let countries = [
      {
        id: 100627904,
        name: 'Hrodna',
        country: 'Belarus',
        timezone: 'Europe/Minsk',
        adminArea: 'Grodnenskaya',
        lon: 23.814722061,
        lat: 53.681388855
      },
      {
        id: 103074805,
        name: 'Hronov',
        country: 'Czech Republic',
        timezone: 'Europe/Prague',
        adminArea: 'Czech Republic',
        lon: 16.182304382,
        lat: 50.479682922
      }
    ];
    let action = setCountryList(countries);
    let state = {
      countryList: []
    };

    let newState = worldWeatherReducer(state, action);

    expect(newState.countryList.length).toBeGreaterThan(0);
  });

  it('Should clear countryList', () => {
    let action = clearCountryList();
    let state = {
      countryList: [
        {
          id: 100627904,
          name: 'Hrodna',
          country: 'Belarus',
          timezone: 'Europe/Minsk',
          adminArea: 'Grodnenskaya',
          lon: 23.814722061,
          lat: 53.681388855
        },
        {
          id: 103074805,
          name: 'Hronov',
          country: 'Czech Republic',
          timezone: 'Europe/Prague',
          adminArea: 'Czech Republic',
          lon: 16.182304382,
          lat: 50.479682922
        }
      ]
    };

    let newState = worldWeatherReducer(state, action);
    expect(newState.countryList).toHaveLength(0);
  });

  it('Should set selectedCountry', () => {
    let selectedCountry = {
      now: {
        time: '2022-01-05T11:39+03:00',
        symbol: 'd300',
        symbolPhrase: 'cloudy',
        temperature: 3,
        feelsLikeTemp: -2,
        relHumidity: 96,
        dewPoint: 2,
        windSpeed: 6,
        windDir: 266,
        windDirString: 'W',
        windGust: 10,
        precipProb: 6,
        precipRate: 0,
        cloudiness: 87,
        thunderProb: 0,
        uvIndex: 0,
        pressure: 993.58,
        visibility: 13213
      },
      daily: [
        {
          date: '2022-01-05',
          symbol: 'd300',
          maxTemp: 4,
          minTemp: 0,
          precipAccum: 9.27,
          maxWindSpeed: 7,
          windDir: 286
        },
        {
          date: '2022-01-06',
          symbol: 'd321',
          maxTemp: 2,
          minTemp: -2,
          precipAccum: 2.35,
          maxWindSpeed: 6,
          windDir: 244
        }
      ],
      countryInfo: {
        id: 100627904,
        name: 'Hrodna',
        country: 'Belarus',
        timezone: 'Europe/Minsk',
        adminArea: 'Grodnenskaya',
        lon: 23.814722061,
        lat: 53.681388855
      }
    };
    let action = setSelectedCountry(selectedCountry);
    let state = {
      selectedCountry: null
    };

    let newState = worldWeatherReducer(state, action);

    expect(newState.selectedCountry).not.toBeNull();
  });

  it('Should set isSearchingStart to true', () => {
    let action = searchingStart(true);
    let state = {
      isSearchingStart: false
    };

    let newState = worldWeatherReducer(state, action);

    expect(newState.isSearchingStart).toBeTruthy();
  });

  it('Should set isSearchingStart to false', () => {
    let action = searchingFinished(false);
    let state = {
      isSearchingStart: true
    };
    let newState = worldWeatherReducer(state, action);

    expect(newState.selectedCountry).not.toBeTruthy();
  });
});
