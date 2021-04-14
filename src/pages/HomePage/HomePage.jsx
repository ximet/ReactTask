import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PageLayout from '../../PageLayout/PageLayout';
import FilterableList from '../../components/FilterableList/FilterableList';
import getCitiesData from '../../services/getCitiesData';
import { minValueLength, zeroLength } from '../../common/constants';

function HomePage() {
  const [cities, setCities] = useState([]);
  const history = useHistory();

  const getAllCitiesByName = async event => {
    const value = event.target.value.toLowerCase();

    if (value.length >= minValueLength) {
      try {
        const dataCities = await getCitiesData(value);
        setCities(dataCities);
      } catch (error) {
        console.log(error);
        history.push('/error');
      }
    }

    if (value.length === zeroLength && cities.length > zeroLength) {
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
