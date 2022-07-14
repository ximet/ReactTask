import { configureStore } from '@reduxjs/toolkit';

import popupSlice from './reducers/PopupSlice/index';
import listPageSlice from './reducers/ListPageSlice/index';
import themeSlice from './reducers/ThemeSlice/index';
import cityPageDetailsSlice from './reducers/CityPageDetailsSlice/index';
import contactsFormSlice from './reducers/ContactsFormSlice/index';

const store = configureStore({
  reducer: {
    popup: popupSlice,
    listPage: listPageSlice,
    theme: themeSlice,
    cityPageDetails: cityPageDetailsSlice,
    contactsForm: contactsFormSlice
  }
});
export default store;
