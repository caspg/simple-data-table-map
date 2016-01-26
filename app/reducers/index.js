import { EDIT_ROW, DELETE_ROW } from '../constants/ActionTypes';
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

    case DELETE_ROW:
      return state.filter((data) => {
        return data.regionName !== action.regionName;
      })

    default:
      return state;
  }
}

function emptyRegions(state = [], action) {
  console.log(state);
  switch (action.type) {
    case DELETE_ROW:
      return [
        {
          regionName: action.regionName,
          code: action.code
        },
        ...state
      ]

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  regionData,
  emptyRegions
});

export default rootReducer;
