import Section from '../Components/Section/Section';
import ListCities from '../Components/ListCities/ListCities';

import { useState, useEffect } from 'react';

import getCityCoords from '../Api/getCityCoords';
import { useGeolocated } from 'react-geolocated';

const List = () => {
  return (
    <Section>
      <h1>List</h1>
      <ListCities />
    </Section>
  );
};

export default List;
