import {
  FETCH_ARTICLES_SUCSESS,
  FETCH_ARTICLES_FAIL
} from '../actions/types';

const INITIAL_STATE =  {
  list: {},
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCSESS:
      return { ...state, list: action.payload };
    case FETCH_ARTICLES_FAIL:
      return { ...state, error: action.payload, loading:false };
    default:
      return state;
  }
};
