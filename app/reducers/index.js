import { EDIT_ROW, DELETE_ROW, ADD_ROW } from '../constants/ActionTypes';
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

    case ADD_ROW:
      return [
        {
          regionName: action.regionName,
          code: action.code,
          value: action.value
        },
        ...state
      ]

    default:
      return state;
  }
}

function emptyRegions(state = [], action) {
  switch (action.type) {
    case DELETE_ROW:
      return [
        {
          regionName: action.regionName,
          code: action.code
        },
        ...state
      ]

    case ADD_ROW:
      return state.filter((data) => {
        return data.regionName !== action.regionName;
      })

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  regionData,
  emptyRegions
});

export default rootReducer;
