import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './Navigation/Navigation';
import store from './ReduxStore/store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
