import { selectFavoriteCityIds } from './favoriteSelectors';

describe('Selectors of favorite forecasts', () => {
  it('Selector should return location ids array', () => {
    const favoriteLocationsArray = {
      locationManager: {
        favoriteCitiesList: [
          {
            id: 15,
            name: 'London',
            country: 'United Kingdom'
          },
          {
            id: 20,
            name: 'Minsk',
            country: 'Belarus'
          }
        ]
      }
    };

    const expectResult = [15, 20];

    expect(selectFavoriteCityIds(favoriteLocationsArray)).toEqual(expectResult);
  });

  it('Selector should return empty array', () => {
    const favoriteLocationsArray = {
      locationManager: {
        favoriteCitiesList: []
      }
    };
    const expectResult = [];

    expect(selectFavoriteCityIds(favoriteLocationsArray)).toEqual(expectResult);
  });
});
