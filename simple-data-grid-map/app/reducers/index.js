import { EDIT_ROW } from '../constants/ActionTypes';
import { combineReducers } from 'redux';

function regionData(state = [], action) {
  switch (action.type) {
    case EDIT_ROW:
      return state.map(function(data) {
        if (data.name === action.regionName) {
          return Object.assign({}, data, { value: action.value })
        } else {
          return data;
        }
      })

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  regionData
});

export default rootReducer;