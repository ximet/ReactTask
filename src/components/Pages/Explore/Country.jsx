import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../layout/Typography/Title/Title';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import axios from 'axios';
import City from './City';
function Country() {
  let { country } = useParams();
  let { path, url } = useRouteMatch();

  const [cities, setCities] = useState();

  useEffect(() => {
    var data = { country: country };

    var config = {
      method: 'post',
      url: 'https://countriesnow.space/api/v0.1/countries/cities',
      headers: {},
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setCities(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log('cities', cities);

  const Cities = () => {
    if (!cities) return <p>loading</p>;

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cities.map(city => {
          return (
            <div style={{ marginRight: 20, marginBottom: 20 }} key={city}>
              <Link to={`${url}/${city}`}>{city}</Link>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Title>Cities in {country}</Title>
      <Cities />
      <Switch>
        <Route path={`${path}/:city`}>
          <City />
        </Route>
      </Switch>
    </div>
  );
}

export default Country;
//{props.match.params.id}
//<Link to={'/country/' + city}>{city}</Link>
