import React from 'react';
import PropTypes from 'prop-types';
import CityListItem from './CityListItem';

export default function CityList({ cities }) {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        margin: '1rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          fontSize: '1.5rem',
          gridGap: '1rem 2rem',
        }}
      >
        {cities.map(({ name, temperature }) => (
          <CityListItem key={name} cityName={name} temperature={temperature} />
        ))}
      </div>
    </div>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      temperature: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
