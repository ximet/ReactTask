import axios from "axios";
import { useEffect, useState } from "react";
import { formatCurrentForecastData, formatDailyForecastData, formatHourlyForecastData, formatLocationData } from "../dataService/formatter";
import { Cookie } from "../dataService/cookie";

const WEATHER_API_URL = 'https://pfa.foreca.com';

const PATHS = {
    location: '/api/v1/location/',
    current: '/api/v1/current/',
    daily: '/api/v1/forecast/daily/',
    hourly: '/api/v1/forecast/3hourly/'
};

const PARAMS = {
    location: '',
    current: '',
    daily: '&dataset=full',
    hourly: '&periods=56'
};

const formatted = {
    location: formatLocationData,
    current: formatCurrentForecastData,
    daily: formatDailyForecastData,
    hourly: formatHourlyForecastData,
}

export function useFetch(type, location) {
    const token = Cookie.getToken();
    const url = WEATHER_API_URL + PATHS[type] + location + PARAMS[type] + `?token=${token}`;

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                const formattedData = formatted[type](response.data);

                setData(formattedData);
            })
            .catch((err) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [type]);

    return [data, loading, error];
}