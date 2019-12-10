import { ENABLE_LOADER, DISABLE_LOADER } from 'actions';

const LoaderReducer = (state = { loader: false }, { type }) => {
  switch (type) {
    case ENABLE_LOADER: {
      return {
        loader: true,
      }
    }
    case DISABLE_LOADER: {
      return {
        loader: false,
      }
    }
    default: {
      return state;
    }
  }
};

export default LoaderReducer;
