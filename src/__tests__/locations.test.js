import cityReducer from '../redux/locations';

describe('theme reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const favCityList = [];
    const action = { type: '' };
    const result = cityReducer(favCityList, action);
    expect(result).toEqual([]);
  });
});
