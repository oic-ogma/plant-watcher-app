import {
  FETCH_ARTICLE_DETAILS,
  CAN_EDIT,
  CANNOT_EDIT
} from '../actions/types';

const INITIAL_STATE = {
  article: {},
  editable: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_DETAILS:
      return { ...state, article: action.payload };
    case CAN_EDIT:
      return { ...state, editable: true };
    case CANNOT_EDIT:
      return { ...state, editable: false };
    default:
      return state;
  }
};