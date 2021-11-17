import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../layout/Typography/Title/Title';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Country from './Country';
import Info from '../Info/Info';

function Explore() {
  const [data, setData] = useState('');

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://countriesnow.space/api/v0.1/countries',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(data);

  const Countries = () => {
    if (!data) return <p>loading</p>;

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map(country => {
          return (
            <div
              style={{ marginRight: 20, marginBottom: 20 }}
              key={country.country !== 'Botswana' ? country.country : country.cities.length}
            >
              <Link to={'/country/' + country.country}>{country.country}</Link>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Title>Explore</Title>
      <Countries />
    </div>
  );
}

export default Explore;
