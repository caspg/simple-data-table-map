import { EDIT_ROW, DELETE_ROW } from '../constants/ActionTypes';

export function editRow(regionName, value) {
  return { type: EDIT_ROW, regionName, value };
}

export function deleteRow(regionName, code) {
  return { type: DELETE_ROW, regionName, code };
}
