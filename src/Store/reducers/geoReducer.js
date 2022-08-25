export const GEO_ACTIONS = {
  USER_GEO_DATA_RECEIVED: 'USER_GEO_DATA_RECEIVED'
};

const initialState = {
  position: null,
  location: null,
};

export const geoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GEO_ACTIONS.USER_GEO_DATA_RECEIVED:
      return {
        ...state,
        position: payload.position,
        location: payload.location,
      };
    default:
      return state;
  }
};

export default geoReducer;
