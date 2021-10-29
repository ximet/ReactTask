import { SET_LOCATION, setLocationAction } from './locationAction';

describe('Location action', () => {
  it('Should return SET_LOCATION action', () => {
    const location = {
      id: 1,
      name: 'name',
      country: 'country',
      lon: 1,
      lat: 1
    };

    const expectedResult = {
      type: SET_LOCATION,
      payload: {
        location: {
          id: 1,
          name: 'name',
          country: 'country',
          lon: 1,
          lat: 1
        }
      }
    };
    expect(setLocationAction(location)).toEqual(expectedResult);
  });
});
