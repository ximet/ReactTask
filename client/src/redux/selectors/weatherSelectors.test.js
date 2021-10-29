import { selectCurrentCityForecast, getWeather } from './weatherSelectors';

describe('Weather selectors', () => {
  it('Selector should return current city forecast', () => {
    const state = {
      currentWeather: {
        temperature: 21,
        symbolPhrase: 'symbolPhrase',
        symbol: 'b000',
        feelsLikeTemp: 22
      }
    };

    const expectedResult = {
      temperature: 21,
      symbolPhrase: 'symbolPhrase'
    };

    expect(selectCurrentCityForecast(state)).toEqual(expectedResult);
  });

  it('Selector should return the whole weather', () => {
    const state = {
      currentWeather: {
        temperature: 21,
        symbolPhrase: 'symbolPhrase',
        symbol: 'b000',
        feelsLikeTemp: 22
      }
    };

    const expectedResult = {
      temperature: 21,
      symbolPhrase: 'symbolPhrase',
      symbol: 'b000',
      feelsLikeTemp: 22
    };

    expect(getWeather(state)).toEqual(expectedResult);
  });
});
