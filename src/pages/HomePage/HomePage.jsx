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

  useEffect(async () => {
    if (inputValue.length >= minValueLength) {
      try {
        const citiesData = await getCitiesData(inputValue);
        setCities(citiesData);
      } catch (error) {
        console.log(error);
        history.push('/error');
      }
    }
    if (inputValue.length < minValueLength) {
      setCities([]);
    }
  }, [inputValue]);

  const changeValue = event => {
    setInputValue(event.target.value.toLowerCase());
  };

  return (
    <PageLayout>
      <FilterableList items={cities} onChange={changeValue} inputValue={inputValue} />
    </PageLayout>
  );
}

export default HomePage;
