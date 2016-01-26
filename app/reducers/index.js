import { EDIT_ROW } from '../constants/ActionTypes';
import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

function regionData(state = [], action) {
  switch (action.type) {
    case EDIT_ROW:
      return state.map((data) => {
        if (data.regionName === action.regionName) {
          return objectAssign({}, data, { value: action.value });
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
