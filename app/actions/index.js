import { EDIT_ROW, DELETE_ROW, ADD_ROW, TOGGLE_DIRECTION } from '../constants/ActionTypes';

export function editRow(regionName, value) {
  return { type: EDIT_ROW, regionName, value };
}

export function deleteRow(regionName, code) {
  return { type: DELETE_ROW, regionName, code };
}

export function addRow(regionName, code, value) {
  return { type: ADD_ROW, regionName, code, value };
}


export function toggleDirection(sortKey, currentDirection) {
  return { type: TOGGLE_DIRECTION, sortKey, currentDirection };
}
