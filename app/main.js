require("./app.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './containers/App';
import statesData from './data/states-data';

const store = createStore(
  rootReducer,
  { regionData: statesData, emptyRegions: [] }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
