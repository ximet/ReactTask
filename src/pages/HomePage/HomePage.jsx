import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PageLayout from '../../PageLayout/PageLayout';
import FilterableList from '../../components/FilterableList/FilterableList';
import getCitiesData from '../../services/getCitiesData';
import { minRequestingQueryLength } from '../../common/constants';

function HomePage() {
  const [cities, setCities] = useState([]);
  const history = useHistory();

  const getAllCitiesByName = async event => {
    const query = event.target.value.toLowerCase();

    if (query.length >= minRequestingQueryLength) {
      try {
        const citiesData = await getCitiesData(query);
        setCities(citiesData);
      } catch (error) {
        console.error(error);
        history.push('/error');
      }
    }

    if (query.length === 0 && cities.length > 0) {
      setCities([]);
    }
  };
  return (
    <PageLayout>
      <FilterableList items={cities} onChange={getAllCitiesByName} />
    </PageLayout>
  );
}
export default HomePage;
