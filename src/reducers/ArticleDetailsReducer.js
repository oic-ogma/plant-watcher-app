import {
  FETCH_ARTICLE_DETAILS,
  DECIDE_USER_ARTICLE,
} from '../actions/types';

const INITIAL_STATE = {
  article: {},
  articleDecision: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_DETAILS:
      return { ...state, article: action.payload };
    case DECIDE_USER_ARTICLE:
      return { ...state, articleDecision: action.payload };
    default:
      return state;
  }
};