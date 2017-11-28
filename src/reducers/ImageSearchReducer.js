import {
  CAMERA_PERMISSION_CHECKED,
  IMAGE_SEARCH_PROCESSING,
  IMAGE_SEARCH_SUCCESS,
  IMAGE_SEARCH_ERROR,
  IMAGE_SEARCH_RESET
} from '../actions/types';

const INITIAL_STATE = {
  hasCameraPermission: null,
  loading: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAMERA_PERMISSION_CHECKED :
      return { ...state, hasCameraPermission: action.payload };
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
