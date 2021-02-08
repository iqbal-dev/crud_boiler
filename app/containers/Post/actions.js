/*
 *
 * Post actions
 *
 */

import { DEFAULT_ACTION,CHANGE_USERNAME } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeUsername(data) {
  console.log(data)
  return {
    type: CHANGE_USERNAME,
    data,
  };
}
