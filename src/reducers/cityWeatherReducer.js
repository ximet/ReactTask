import { SET_CURRENT_CITY } from '../constants';

const initialState = {
    currentCity: {
        weather: "clear-day",
        iconType: "CLEAR_DAY",
        cityName: "Minsk",
        temperature: "+12°C",
        wind: "SW",
        id: 0,
    },
    allCities: [
        {
            weather: "clear-night",
            iconType: "CLEAR_NIGHT",
            cityName: "Moscow",
            temperature: "+5°C",
            wind: "SE",
            id: 1,
        },
        {
            weather: "partly-cloudy-day",
            iconType: "PARTLY_CLOUDY_DAY",
            cityName: "Paris",
            temperature: "+15°C",
            wind: "NE",
            id: 2,
        },
        {
            weather: "rain",
            iconType: "RAIN",
            cityName: "Tokio",
            temperature: "+10°C",
            wind: "SE",
            id: 3,      
        },
        {
            weather: "fog",
            iconType: "FOG",
            cityName: "Milan",
            temperature: "+17°C",
            wind: "NW",
            id: 4,
        } 
    ]
};

const cityWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_CITY: {
            return {
                ...state,
                currentCity: action.city
            };
        }

        default: {
            return state;
        }
    }
};

export default cityWeatherReducer;