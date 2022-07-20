import React, { useEffect, useState } from 'react';

export default function DetailedPage(props) {
  const [locationName, setLocationName] = useState();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const locationName = params.get('name');
    const lonLat = params.get('lon-lat');
    setLocationName(locationName);
  }, []);

  return (
    <>
      <h1>{locationName}</h1>
    </>
  );
}
