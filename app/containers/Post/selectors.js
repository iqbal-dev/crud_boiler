
/**
 * Direct selector to the post state domain
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPost = state => state.home || initialState;

const makeSelectPost = () =>
  createSelector(
    selectPost,
    homeState => homeState.tableData,
  );

export { selectPost, makeSelectPost };
