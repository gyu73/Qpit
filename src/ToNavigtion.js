import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import promiseMiddleware from 'redux-promise';
import reducer from '../reducers/';

import Navigation from './Navigation';

const middleWare = [
  promiseMiddleware,
];

const store = createStore(
  reducer,
  devToolsEnhancer(),
  applyMiddleware(...middleWare),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function ToNavigation() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default ToNavigation;
