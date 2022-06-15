import React, { useEffect, useState } from 'react';

type Props = {};

const Home = (props: Props): JSX.Element => {
  const [city, setCity] = useState('London');
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const accessToken = localStorage.getItem('token');
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        };
        const response = await fetch(
          `https://pfa.foreca.com/api/v1/location/search/${city}`,
          options
        );
        const json = await response.json();
        setData(JSON.stringify(json.locations));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>{city} info</h2>
      <div>{data}</div>
    </div>
  );
};

export default Home;
