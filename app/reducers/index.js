import { combineReducers } from 'redux';

import sortState from './sortState';
import emptyRegions from './emptyRegions';
import regionData from './regionData';

const rootReducer = combineReducers({
  regionData,
  emptyRegions,
  sortState
});

export default rootReducer;
