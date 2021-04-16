import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import PageLayout from '../../PageLayout/PageLayout';
import FilterableList from '../../components/FilterableList/ContainerFilterableList';
import City from '../../components/City/City';
import { minRequestingQueryLength } from '../../common/constants';

function HomePage({
  currentCity,
  isLoaded,
  cityName,
  getMatchedCitiesData,
  matchedCitiesData,
  eraseCitiesData
}) {
  const history = useHistory();
  const getAllCitiesByName = async event => {
    const query = event.target.value.toLowerCase();

    if (query.length >= minRequestingQueryLength) {
      getMatchedCitiesData(query);
    }

    if (query.length === 0 && matchedCitiesData.length > 0) {
      eraseCitiesData();
    }
  };
  return (
    <PageLayout>
      <FilterableList items={matchedCitiesData} onChange={getAllCitiesByName} />
      {isLoaded && <City city={currentCity} cityName={cityName} />}
    </PageLayout>
  );
}

HomePage.propTypes = {
  currentCity: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  cityName: PropTypes.string.isRequired,
  getMatchedCitiesData: propTypes.func.isRequired,
  matchedCitiesData: propTypes.array.isRequired,
  eraseCitiesData: PropTypes.func.isRequired
};

export default HomePage;
