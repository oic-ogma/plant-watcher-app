import {
  SET_ARTICLE_DETAILS,
  CAN_EDIT,
  CANNOT_EDIT,
  IS_BOOKMARKED,
  IS_NOT_BOOKMARKED,
  BOOKMARK_PROCESSING
} from '../actions/types';

const INITIAL_STATE = {
  article: {},
  editable: false,
  bookmarked: false,
  bookmarkProcessing: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ARTICLE_DETAILS:
      return { ...state, article: action.payload };
    case CAN_EDIT:
      return { ...state, editable: true };
    case CANNOT_EDIT:
      return { ...state, editable: false };
    case IS_BOOKMARKED:
      return { ...state, bookmarked: true, bookmarkProcessing: false };
    case IS_NOT_BOOKMARKED:
      return { ...state, bookmarked: false, bookmarkProcessing: false };
    case BOOKMARK_PROCESSING:
      return { ...state, bookmarkProcessing: true };
    default:
      return state;
  }
};
