const instate = {
    mainState: true
  };
  
export default function changeMainState(state = instate, action) {
    if (action.type === 'CHANGE_MAIN') {
        return {
            mainState: action.payload
        };
    }
    return state;
}