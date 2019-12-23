import { SET_CURRENT_CITY_ID, CITIES_HAS_ERRORED, CITIES_ARE_LOADING, CITIES_FETCH_DATA_SUCCESS } from '../constants';

export const setCurrentCityId = cityId => ({
    type: SET_CURRENT_CITY_ID,
    cityId
});

export const citiesHasErrored = bool => ({
    type: CITIES_HAS_ERRORED,
    hasErrored: bool
});

export const citiesIsLoading = bool => ({
    type: CITIES_ARE_LOADING,
    isLoading: bool
});

export const citiesFetchDataSuccess = cities => ({
    type: CITIES_FETCH_DATA_SUCCESS,
    cities
});

export const citiesFetchData = url => {
    return dispatch => {
        dispatch(citiesIsLoading(true));
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(citiesIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(cities => dispatch(citiesFetchDataSuccess(cities.list)))
            .catch(() => dispatch(citiesHasErrored(true)));
    };
};