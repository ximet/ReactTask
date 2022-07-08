import { configureStore } from '@reduxjs/toolkit';

import listPageSlice from './reducers/ListPageSlice/index';
import prevPageSlice from './reducers/PrevPageSlice/index';

const store = configureStore({
  reducer: {
    listPage: listPageSlice,
    prevPage: prevPageSlice
  }
});
export default store;
