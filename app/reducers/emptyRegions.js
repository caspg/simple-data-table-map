import { DELETE_ROW, ADD_ROW } from '../constants/ActionTypes';

export default function emptyRegions(state = [], action) {
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
