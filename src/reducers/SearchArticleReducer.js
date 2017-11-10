import {
  TEXT_SEARCH_ARTICLE_SUCCESS,
  TEXT_SEARCH_ARTICLE_FAIL,
  TEXT_SEARCH_ARTICLE_PLANT_NAME_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
  plantName: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEXT_SEARCH_ARTICLE_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case TEXT_SEARCH_ARTICLE_FAIL:
      return { ...state, error: action.payload };
    case TEXT_SEARCH_ARTICLE_PLANT_NAME_CHANGED:
      return { ...state, plantName: action.payload };
    default:
      return state;
  }
};
