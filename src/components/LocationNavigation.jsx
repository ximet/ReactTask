import { useState } from 'react';
import World from '../../the-world.json';
import Tile from './Tile';

const countries = Object.keys(World);

export default function LocationNavigation() {
  const [countrySelected, setCountry] = useState('');

  return (
    <div className="location-nav__container">
      {!countrySelected ? (
        countries.map(country => <Tile locationName={country} clickHandler={setCountry} />)
      ) : (
        <>
          <button className="location-nav__back-btn" onClick={() => setCountry('')}>
            Back to countries
          </button>
          {World[countrySelected].map(city => (
            <Tile locationName={city} countrySelected={countrySelected} />
          ))}
        </>
      )}
    </div>
  );
}
