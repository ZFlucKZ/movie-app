import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';

import './index.css';
import App from './components/App';
import combineReducers from './reducers';

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // middleware code
//       console.log('ACTION_TYPE  =', action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log('ACTION_TYPE  =', action.type);
    next(action);
  };

const store = createStore(combineReducers, applyMiddleware(logger));
console.log('store', store);
// console.log('before state', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }, { name: 'Batman' }],
// });

// console.log('after state', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
