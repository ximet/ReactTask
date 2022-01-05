import { getSelectedCountry } from './index';
import { getWorldWeather } from './baseSelector';

jest.mock('./baseSelector', () => ({
  getWorldWeather: jest.fn()
}));

describe('World Weather Selectors', () => {
  describe('getSelectedCountry', () => {
    let state = {
      selectedCountry: null
    };
    it('should return selectedCountry', () => {
      getWorldWeather.mockReturnValue(state);
      expect(getSelectedCountry(state)).toBeNull();
    });
  });
});
