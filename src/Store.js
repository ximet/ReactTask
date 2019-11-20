import YZstore from 'YZstore/YZstore'
const defaultState = {
  tempUnit: {
    name: 'Celsius',
    unit: 'C°',
    value: 'C'
  }
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_TEMP_UNIT': {
      state.tempUnit = action.value;
      return state;
    }
    default:
      return state
  }
}

let Store = new YZstore(reducer);

export default Store;
