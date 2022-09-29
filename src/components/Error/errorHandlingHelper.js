const getErrorDetails = (type, title, message) => ({ type, title, message });

export const POSSIBLE_ERRORS = {
  GET_CITIES: getErrorDetails(
    'GET_CITIES',
    'Server error',
    'Something went wrong. Cannot get cities.'
  )
};
