const initialState = "";

export default function filterCity(state = initialState, action) {
    if (action.type === 'FIND_CITY') {
        return action.payload;
    }
    return state;
}