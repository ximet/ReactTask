import { CITIES_ARE_LOADING } from '../constants';

const citiesAreLoading = (state = false, action) => {
    switch (action.type) {
        case CITIES_ARE_LOADING:
            return action.isLoading;

        default:
            return state;
    };
};

export default citiesAreLoading;