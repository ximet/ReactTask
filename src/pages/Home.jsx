import React from 'react';
import SearchBar from '../components/SearchBar';
import LocationNavigation from '../components/LocationNavigation';

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <SearchBar />
      <LocationNavigation />
    </>
  );
}
