import PropTypes, { number, string } from 'prop-types';

export const currentLocationInfoType = PropTypes.shape({
    "id": number.isRequired,
    "name": string.isRequired,
    "country": string.isRequired,
    "timezone": string,
    "adminArea": string,
    "lon": number,
    "lat": number
})

export const currentLocationWeatherType = PropTypes.shape({
    "time": string.isRequired,
    "symbol": string.isRequired,
    "symbolPhrase": string.isRequired,
    "temperature": number.isRequired,
    "feelsLikeTemp": number.isRequired,
    "relHumidity": number,
    "dewPoint": number,
    "windSpeed": number.isRequired,
    "windDirString": string.isRequired,
    "windGust": number,
    "precipProb": number,
    "precipRate": number,
    "cloudiness": number,
    "thunderProb": number,
    "uvIndex": number,
    "pressure": number,
    "visibility": number
})


