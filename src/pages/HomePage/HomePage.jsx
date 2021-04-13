import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import PageLayout from '../../PageLayout/PageLayout';
import FilterableList from '../../components/FilterableList/FilterableList';
import getCitiesData from '../../services/getCitiesData';
import { minValueLength } from '../../common/constants';

function HomePage() {
  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const getAllCitiesByName = async event => {
    setInputValue(event.target.value.toLowerCase());

    if (inputValue.length >= minValueLength) {
      try {
        let getDataCities = await getCitiesData(inputValue);
        setCities(getDataCities);
      } catch (error) {
        console.log(error);
        history.push('/error');
      }
    } else {
      setCities([]);
    }
  };

  return (
    <PageLayout>
      <FilterableList items={cities} onChange={getAllCitiesByName} inputValue={inputValue} />
    </PageLayout>
  );
}

export default HomePage;
