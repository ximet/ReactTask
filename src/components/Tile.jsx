import { Link } from 'react-router-dom';

export default function TileCountry({ loactionName, clickHandler, countrySelected }) {
  return (
    <>
      {!countrySelected ?
        <span className='location-nav__tile' onClick={() => clickHandler(loactionName)}>{loactionName}</span>
        :
        <Link className='location-nav__tile' to={{ pathname: `/location/weather-in-${loactionName}`, search: `?name=${loactionName}&country=${countrySelected}` }} >{loactionName}</Link>
      }
    </>
  )
}