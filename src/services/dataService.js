import * as axios from 'axios';
import {
    API_AUTH_URL,
    API_BASE_URL,
    API_CURRENT_WEATHER_URL,
    API_SEARCH_URL
} from '../constants/constants';

const instance = axios.create({
    withCredentials: true,
    baseURL: API_BASE_URL
});

export const weatherAPI = {
    token: null,
    getAuthHeaders() {
        return {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }
    },
    async getToken(user, password) {
        const body = {
            user: `${user}`,
            password: `${password}`
        };
        try {
            const response = await instance.post(API_AUTH_URL, body, {
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
            this.token = response.data.access_token;
        } catch (error) {
            console.log(error);
            this.token = null;
        }

        return this.token;
    },
    async searchLocation(query) {
        try {
            const response = await instance.get(API_SEARCH_URL + query, this.getAuthHeaders());
            return response.data.locations;
        } catch (error) {
            console.log(error);
            return null;
        }
    },
    async getCurrentWeather(locationId) {
        try {
            const response = await instance.get(API_CURRENT_WEATHER_URL + locationId, this.getAuthHeaders());
            return response.data.current;
        } catch (error) {
            console.log(error);
            return null;
        }        
    },
    getForecast(forecastType, locationId) {
        return instance.get(API_SEARCH_URL + query, this.getAuthHeaders());
    }
};