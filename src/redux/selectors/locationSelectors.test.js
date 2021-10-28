import {
  getCityInfo,
  getFavoriteCities,
  selectCityTitle,
  selectCityCards
} from '../selectors/locationSelectors';
import CityCard from '../../components/CityCard/Container';

describe('Location Selectors', () => {
  it('Selector should return city info', () => {
    const state = {
      location: {
        currentCity: {
          adminArea: 'Minsk',
          country: 'Belarus',
          id: 100625144,
          lat: 53.900001526,
          lon: 27.566667557,
          name: 'Minsk',
          timezone: 'Europe/Minsk'
        }
      }
    };

    const expextedResult = {
      adminArea: 'Minsk',
      country: 'Belarus',
      id: 100625144,
      lat: 53.900001526,
      lon: 27.566667557,
      name: 'Minsk',
      timezone: 'Europe/Minsk'
    };

    expect(getCityInfo(state)).toEqual(expextedResult);
  });

  it('Selector should return recent cities info', () => {
    const state = {
      location: {
        recentCities: [
          {
            adminArea: 'Minsk',
            country: 'Belarus',
            id: 100625144,
            lat: 53.900001526,
            lon: 27.566667557,
            name: 'Minsk',
            timezone: 'Europe/Minsk'
          },
          {
            adminArea: 'Gomel',
            country: 'Belarus',
            id: 103215144,
            lat: 20,
            lon: 10,
            name: 'Gomel',
            timezone: 'Europe/Gomel'
          }
        ]
      }
    };

    const expextedResult = [
      {
        adminArea: 'Minsk',
        country: 'Belarus',
        id: 100625144,
        lat: 53.900001526,
        lon: 27.566667557,
        name: 'Minsk',
        timezone: 'Europe/Minsk'
      },
      {
        adminArea: 'Gomel',
        country: 'Belarus',
        id: 103215144,
        lat: 20,
        lon: 10,
        name: 'Gomel',
        timezone: 'Europe/Gomel'
      }
    ];

    expect(getFavoriteCities(state)).toEqual(expextedResult);
  });

  it('Selector should return main city info', () => {
    const state = {
      location: {
        currentCity: {
          adminArea: 'Minsk',
          country: 'Belarus',
          id: 100625144,
          lat: 53.900001526,
          lon: 27.566667557,
          name: 'Minsk',
          timezone: 'Europe/Minsk'
        }
      }
    };

    const expextedResult = {
      country: 'Belarus',
      id: 100625144,
      name: 'Minsk'
    };

    expect(selectCityTitle(state)).toEqual(expextedResult);
  });

  it('Selector should return city cards', () => {
    const state = {
      location: {
        recentCities: [
          {
            adminArea: 'Minsk',
            country: 'Belarus',
            id: 100625144,
            lat: 53.900001526,
            lon: 27.566667557,
            name: 'Minsk',
            timezone: 'Europe/Minsk'
          },
          {
            adminArea: 'Gomel',
            country: 'Belarus',
            id: 103215144,
            lat: 20,
            lon: 10,
            name: 'Gomel',
            timezone: 'Europe/Gomel'
          }
        ]
      }
    };

    const expextedResult = [
      <CityCard
        info={{
          adminArea: 'Minsk',
          country: 'Belarus',
          id: 100625144,
          lat: 53.900001526,
          lon: 27.566667557,
          name: 'Minsk',
          timezone: 'Europe/Minsk'
        }}
      />,
      <CityCard
        info={{
          adminArea: 'Gomel',
          country: 'Belarus',
          id: 103215144,
          lat: 20,
          lon: 10,
          name: 'Gomel',
          timezone: 'Europe/Gomel'
        }}
      />
    ];

    expect(selectCityCards(state)).toEqual(expextedResult);
  });
});
