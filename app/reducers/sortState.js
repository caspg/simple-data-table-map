import { TOGGLE_DIRECTION } from '../constants/ActionTypes';

function newSortDirection(state, action) {
  if (state.key !== action.newSortKey) return state.direction;
  return state.direction === 'ASC' ? 'DESC' : 'ASC';
}

export default function sortState(state = {}, action) {
  switch (action.type) {
    case TOGGLE_DIRECTION:
      return {
        key: action.newSortKey,
        direction: newSortDirection(state, action)
      };

    default:
      return state;
  }
}
