import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import PageLayout from '../../PageLayout/PageLayout';
import FilterableList from '../../components/FilterableList/FilterableList';
import getCitiesData from '../../services/getCitiesData';

function HomePage() {
  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  useEffect(async () => {
    if (inputValue.length >= 3) {
      try {
        const getDataCites = await getCitiesData(inputValue);
        setCities(getDataCites);
      } catch (error) {
        history.push('/error');
      }
    } else {
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
