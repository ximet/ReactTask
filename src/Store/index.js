import { configureStore } from '@reduxjs/toolkit';

import listPageSlice from './reducers/ListPageSlice/index';

const store = configureStore({
  reducer: {
    listPage: listPageSlice,
    // useGoods: useGoodsSlice,
  }
});
export default store