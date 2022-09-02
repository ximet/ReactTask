const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();

app.use(cors());

const foreca = axios.create({
  baseURL: 'https://pfa.foreca.com/api/v1',
  headers: {
    authorization: `Bearer ${process.env.WEATHER_API_KEY}`
  }
});

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.get('/get-city', (req, res) => {
  foreca.get(`location/${req.query.latitude},${req.query.latitude}`).then(function (response) {
    res.json({
      country: response.data.country,
      city: response.data.name,
      latitude: response.data.lat,
      longitude: response.data.lon
    });
  });
});

app.get('/get-city-coords', (req, res) => {
  foreca.get(`location/search/${req.query.query}`).then(function (response) {
    res.json({
      country: response.data.locations[0].country,
      city: response.data.locations[0].name,
      latitude: response.data.locations[0].lat,
      longitude: response.data.locations[0].lon
    });
  });
});

app.get('/get-current-weather', (req, res) => {
  foreca
    .get(`current/location=${req.query.latitude},${req.query.longitude}`)
    .then(function (response) {
      res.json({
        country: req.query.country,
        city: req.query.city,
        symbol: response.data.current.symbol,
        temperature: response.data.current.temperature,
        relHumidity: response.data.current.relHumidity,
        windSpeed: response.data.current.windSpeed,
        cloudiness: response.data.current.cloudiness
      });
    });
});

app.get('/get-detail-weather', (req, res) => {
  foreca
    .get(
      `forecast/daily/location=${req.query.latitude},${req.query.longitude}&dataset=full&periods=8`
    )
    .then(function (response) {
      let detailWeather = () => {
        return response.data.forecast.map(item => {
          return {
            date: item.date,
            symbol: item.symbol,
            minTemp: item.minTemp,
            maxTemp: item.maxTemp,
            minRelHumidity: item.minRelHumidity,
            maxRelHumidity: item.maxRelHumidity,
            windSpeed: item.maxWindSpeed,
            cloudiness: item.cloudiness
          };
        });
      };

      res.send(detailWeather());
    });
});

app.listen(8000, () => {
  console.log('server is runnings');
});
