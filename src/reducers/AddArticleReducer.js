import {
  PLANT_NAME_CHANGED,
  ARTICLE_CONTENTS_CHANGED,
  ADD_ARTICLE_PROCESSING,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAIL,
  CAMERA_PERMISSION_CHECKED,
  PHOTO_CAPTURED,
} from '../actions/types';

const INITIAL_STATE = {
  plantName: '',
  articleContents: '',
  loading: false,
  error: '',
  photo: ''

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLANT_NAME_CHANGED:
      return { ...state, plantName: action.payload };
    case ARTICLE_CONTENTS_CHANGED:
      return { ...state, articleContents: action.payload };
    case PHOTO_CAPTURED:
      return { ...state, photo: action.payload };
    case ADD_ARTICLE_PROCESSING:
      return { ...state, loading: true, error: '' };
    case ADD_ARTICLE_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case ADD_ARTICLE_FAIL:
      return { ...state, error: action.payload, loading: false };
    case CAMERA_PERMISSION_CHECKED :
      return { ...state, hasCameraPermission: action.payload };
    default:
      return state;
  }
};
