import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../layout/Typography/Title/Title';
import axios from 'axios';
function City() {
  let { city } = useParams();

  const [cities, setCities] = useState();
  const [identifierCity, setidentifierCity] = useState();
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTYzNzA1OTMyOCwiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2MzcwNTkzMjgsImp0aSI6IjYxNDdlMTEwY2Y2NzE1ZjAiLCJzdWIiOiJpdmFuc2hvc2hrb3YiLCJmbXQiOiJYRGNPaGpDNDArQUxqbFlUdGpiT2lBPT0ifQ.XZy1ejuB-5hwsFlyUvc0DoQw3DYN1iBZJptZidhoIzA';

  useEffect(() => {
    cities
      ? axios
          .get(`https://pfa.foreca.com/api/v1/observation/latest/${cities.data.locations[0].id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(result => setidentifierCity(result))
      : null;
  }, [cities]);

  useEffect(() => {
    axios
      .get(`https://pfa.foreca.com/api/v1/location/search/${city}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(result => setCities(result));
  }, []);

  identifierCity && console.log('OBSERVATIONS', identifierCity.data.observations[0].distance);

  const City = () => {
    if (!identifierCity) return <p>loading</p>;

    const {
      station,
      distance,
      time,
      temperature,
      feelsLikeTemp
    } = identifierCity.data.observations[0];

    //    "station": "Espoo Tapiola",
    //   "distance": "21 km N",
    //   "time": "2020-03-16T14:30:00+02:00",
    //   "temperature": 5,
    //   "feelsLikeTemp": 2,
    //   "symbol": "d400",
    //   "windDirString": "NW",
    //   "windDir": 315,
    //   "windSpeed": 4,
    //   "windGust": 6,
    //   "pressure": 1007.9,
    //   "relHumidity": 80,
    //   "visibility": 48992

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ marginRight: 20, marginBottom: 20 }}>
          <p>station:{station}</p>
          <p>distance:{distance}</p>
          <p>time:{time}</p>
          <p>temperature:{temperature}</p>
          <p>feelsLikeTemp:{feelsLikeTemp}</p>
        </div>
      </div>
    );
  };

  console.log('CITY::::::::', city);

  return (
    <div>
      <Title>The city of {city}</Title>
      <City />
    </div>
  );
}

export default City;
//{props.match.params.id}
//<Link to={'/country/' + city}>{city}</Link>
