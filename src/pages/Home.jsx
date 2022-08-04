import React from 'react';
import SearchBar from '../components/SearchBar';
import LocationNavigation from '../components/LocationNavigation';
import CurrentLocation from '../components/CurrentLocation';

export default function HomePage() {
  return (
    <div className="home-page">
      <CurrentLocation />
      <SearchBar />
      <LocationNavigation />
    </div>
  );
}
