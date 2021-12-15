import { CURRENT_SAVED_CITY } from '../../actions/types';

const INITIAL_STATE = {};
const getCurrentSavedCityReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENT_SAVED_CITY:
            return { ...state, data: action.payload };

        default:
            return { ...state };
    }
};

export default getCurrentSavedCityReducer;
