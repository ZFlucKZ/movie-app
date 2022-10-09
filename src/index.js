import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
// import { createContext } from 'react';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducers from './reducers';

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // my middlware
    console.log('ACTION', action);
    next(action);
  };

const store = createStore(rootReducers, applyMiddleware(logger, thunk));
console.log('state', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>
);
