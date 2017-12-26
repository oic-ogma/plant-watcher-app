import {
  CAMERA_PERMISSION_CHECKED,
  IMAGE_SEARCH_PROCESSING,
  IMAGE_SEARCH_SUCCESS,
  IMAGE_SEARCH_ERROR,
  IMAGE_SEARCH_RESET,
  STARTED_AS_SEARCH,
  STARTED_AS_ADD_ARTICLE
} from '../actions/types';

const INITIAL_STATE = {
  hasCameraPermission: null,
  loading: false,
  error: null,
  searchMode: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAMERA_PERMISSION_CHECKED :
      return { ...state, hasCameraPermission: action.payload };
    case STARTED_AS_SEARCH :
      return { ...INITIAL_STATE, searchMode: true };
    case STARTED_AS_ADD_ARTICLE:
      return { ...INITIAL_STATE, searchMode: false };
    case IMAGE_SEARCH_PROCESSING :
      return { ...state, loading: true };
    case IMAGE_SEARCH_SUCCESS :
      return { ...state, loading: false };
    case IMAGE_SEARCH_ERROR :
      return { ...state, loading: false, error: action.payload };
    case IMAGE_SEARCH_RESET :
      return { ...state, error: null };
    default:
      return state;
  }
};
