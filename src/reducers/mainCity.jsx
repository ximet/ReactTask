const initialState  = {
    city: "Kuala Lumpur",
    temperature: "+15"
  };
  
export default function changeMainState(state = initialState, action) {
    if (action.type === 'CHANGE_MAIN_CITY') {
        return {
            city: action.payload.city,
            temperature: action.payload.temperature
        };
    }
    return state;
}