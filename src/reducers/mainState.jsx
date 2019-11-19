const initialState  = {
    mainState: true
  };
  
export default function changeMainState(state = initialState, action) {
    if (action.type === 'CHANGE_MAIN') {
        return {
            mainState: action.payload
        };
    }
    return state;
}