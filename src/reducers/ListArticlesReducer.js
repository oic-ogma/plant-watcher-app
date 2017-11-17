import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLES_PROCESSING
} from '../actions/types';

const INITIAL_STATE =  {
  list: {},
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, list: action.payload, error: '', loading: false };
    case FETCH_ARTICLES_FAIL:
      return { ...state, error: action.payload, loading: false };
    case FETCH_ARTICLES_PROCESSING:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
