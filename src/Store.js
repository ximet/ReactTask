import YZstore from 'YZstore/YZstore'

function reducer(state = {}, action) {
  switch (action.type) {
    case 'SET_TEMP_UNIT':
      state.tempUnit = action.value
      return state;
    default:
      return state
  }
}

let Store = new YZstore(reducer);

export default Store; 