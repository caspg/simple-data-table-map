require("./main.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './containers/App';
import statesData from './data/states-data';

const initialState = {
  regionData: statesData,
  emptyRegions: [],
  sortState: { key: 'regionName', direction: 'ASC' }
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
