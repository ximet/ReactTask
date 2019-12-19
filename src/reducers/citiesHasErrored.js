import { CITIES_HAS_ERRORED } from '../constants';

export function citiesHasErrored(state = false, action) {
    switch (action.type) {
        case CITIES_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    };
};

export default citiesHasErrored;