import { CITIES_FETCH_DATA_SUCCESS } from '../constants';

const cities = (state = [], action) => {
    switch (action.type) {
        case CITIES_FETCH_DATA_SUCCESS:
            return action.cities;

        default:
            return state;
    };
};

export default cities;