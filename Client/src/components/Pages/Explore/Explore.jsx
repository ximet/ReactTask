import React, { useEffect, useState } from 'react';
import Searchbar from '../../layout/Search/Searchbar';
import Title from '../../layout/Typography/Title/Title';
import PreviousCities from './PreviousCities';

function Explore() {
  return (
    <div>
      <Title>Explore</Title>
      <PreviousCities/>
      <Searchbar />
    </div>
  );
}

export default Explore;
