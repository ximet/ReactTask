import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App.jsx';

const instate = ['Kas', 'Alex'];

function playlist(state = instate, action) {
    if (action.type === 'ADD_TRACK') {
      return [
        ...state,
        action.payload
      ];
    }
    return state;
  }
  
  const store = createStore(playlist);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'));
