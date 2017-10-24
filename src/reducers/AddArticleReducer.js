import {
  PLANT_NAME_CHANGED,
  ARTICLE_CONTENTS_CHANGED,
  ADD_ARTICLE_PROCESSING,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  plantName: '',
  articleContents: '',
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLANT_NAME_CHANGED:
      return { ...state, plantName: action.payload };
    case ARTICLE_CONTENTS_CHANGED:
      return { ...state, articleContents: action.payload };
    case ADD_ARTICLE_PROCESSING:
      return { ...state, loading: true, error: '' };
    case ADD_ARTICLE_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case ADD_ARTICLE_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
