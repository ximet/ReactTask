import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../../../../app_data/styles_info/common_styles';
import { Country } from '../../components/Country/';

Countries.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      temperature: PropTypes.string.isRequired
      // icon: PropTypes.object.isRequired
    })
  )
};

export function Countries(props) {
  const countries = props.countries.length ? (
    props.countries.map(country => (
      <Country
        key={country.id}
        city={country.city}
        country={country.country}
        // icon={country.icon}
        temperature={country.temperature}
      />
    ))
  ) : (
    <S.Title m={'0 22px'} variant="h6" align="left">
      Try again
    </S.Title>
  );
  return (
    <S.GridContainer container spacing={2}>
      {countries}
    </S.GridContainer>
  );
}
