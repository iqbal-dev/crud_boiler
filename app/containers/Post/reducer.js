/*
 *
 * Post reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, CHANGE_USERNAME } from './constants';

export const initialState = {
  aboutusDetails: "",
  aboutusNote: "",
  aboutusType: "",
  cmsId: 0,
};

/* eslint-disable default-case, no-param-reassign */
const postReducer = (state = initialState, action) =>
  produce(state,  draft  => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.aboutusDetails = action.data.aboutusDetails;
        draft.aboutusNote = action.data.aboutusNote;
        draft.aboutusType = action.data.aboutusType;
        draft.cmsId = action.data.cmsId;
        break;
    }
    console.log(draft.aboutusDetails);
  });
export default postReducer;
