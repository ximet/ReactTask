import React from 'react';
import PropTypes from 'prop-types';
import * as S from '../../../../app_data/styles_info/common_styles';
import { Country } from '../../components/Country/';

Countries.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      temperature: PropTypes.string.isRequired
      // icon: PropTypes.object.isRequired
    })
  ),
  selectedCountry: PropTypes.array
};

export function Countries(props) {
  debugger;
  // const countries = props.selectedCountry.length ? (
  //   // props.countries.map(country => (
  //   //   <Country
  //   //     key={country.id}
  //   //     city={country.name}
  //   //     country={country.country}
  //   //     // icon={country.icon}
  //   //     temperature={country.temperature}
  //   //   />
  //   // ))
  //   props.selectedCountry.map(country => (
  //     <Country
  //       key={country.id}
  //       city={country.name}
  //       country={country.country}
  //       // icon={country.icon}
  //       temperature={country.temperature}
  //     />
  //   ))
  // ) : (
  //   <S.Title m={'0 22px'} variant="h6" align="left">
  //     Try again
  //   </S.Title>
  // );
  return <Country {...props} />;
}
