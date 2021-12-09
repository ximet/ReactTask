import { CHANGE_APP_TITLE } from "../../actions/types";

const INITIAL_STATE = {
    title: 'Weather App',
};

const titleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_APP_TITLE: return { ...state, title: 'Meteorology App' }

        default:
            return { ...state }
    }
}

export default titleReducer;