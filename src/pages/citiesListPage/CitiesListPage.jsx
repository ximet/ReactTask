import { Link } from 'react-router-dom';

export const citiesInfo = [
  {
    country: 'Belarus',
    city: 'Gomel',
    location: '30.96188905796742, 52.431630145432365'
  },
  {
    country: 'Belarus',
    city: 'Mogilev',
    location: '30.341819575020853, 53.90409319881487'
  },
  {
    country: 'Russia',
    city: 'Moscow',
    location: '37.563959039057146, 55.74187522321242'
  },
  {
    country: 'Poland',
    city: 'Warsaw',
    location: '21.013808805601666, 52.240003624394355'
  },
  {
    country: 'Russia',
    city: 'St. Petersburg',
    location: '30.321230624071756, 59.95244404263738'
  },
  {
    country: 'Latvia',
    city: 'Riga',
    location: '24.120916741535993, 56.97289321208901'
  }
];

function CitiesListPage() {
  return (
    <ul>
      {citiesInfo.map(cityInfo => (
        <li key={cityInfo.location}>
          <Link to={`/world_weather/${cityInfo.city}`}>
            {cityInfo.country}, {cityInfo.city}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CitiesListPage;
