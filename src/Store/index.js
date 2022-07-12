import { configureStore } from '@reduxjs/toolkit';

import listPageSlice from './reducers/ListPageSlice/index';
import prevPageSlice from './reducers/PrevPageSlice/index';
import themeSlice from './reducers/ThemeSlice/index';

const store = configureStore({
  reducer: {
    listPage: listPageSlice,
    prevPage: prevPageSlice,
    theme: themeSlice
    // prevPage: prevPageSlice,
  }
});
export default store;
