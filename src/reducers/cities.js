import { CITIES_FETCH_DATA_SUCCESS } from '../constants';

const initialState = [];

const cities = (state = initialState, action) => {
    switch (action.type) {
        case CITIES_FETCH_DATA_SUCCESS:
            return action.cities;

        default:
            return state;
    };
};

export default cities;