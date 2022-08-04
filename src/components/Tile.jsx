import { Link } from 'react-router-dom';

export default function TileCountry({ locationName, clickHandler, countrySelected }) {
  return (
    <>
      {!countrySelected ? (
        <span className="location-nav__tile" onClick={() => clickHandler(locationName)}>
          {locationName}
        </span>
      ) : (
        <Link
          className="location-nav__tile"
          to={{
            pathname: `/location/weather-in-${locationName}`,
            search: `?name=${locationName}&country=${countrySelected}`
          }}
        >
          {locationName}
        </Link>
      )}
    </>
  );
}
