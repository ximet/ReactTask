import { SET_CURRENT_CITY_ID } from '../constants';

const currentCity = (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_CITY_ID: {
            return action.cityId;
        }

        default: {
            return state;
        }
    }
};

export default currentCity;