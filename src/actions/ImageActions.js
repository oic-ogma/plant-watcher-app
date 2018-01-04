import {
  CAMERA_PERMISSION_CHECKED,
  IMAGE_SEARCH_PROCESSING,
  FETCH_ARTICLES_PROCESSING,
  IMAGE_SEARCH_SUCCESS,
  IMAGE_SEARCH_ERROR,
  IMAGE_SEARCH_RESET,
  STARTED_AS_SEARCH,
  STARTED_AS_ADD_ARTICLE
} from './types';
import { Permissions } from 'expo';
import axios from 'axios';
import { getSearchResults } from './ArticleActions';
import settings from '../../settings.json';

export const checkCameraPermissions = () => {
  return async dispatch => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    dispatch({
      type: CAMERA_PERMISSION_CHECKED,
      payload: status === 'granted'
    });
  };
};

export const startAsSearch = () => ({ type: STARTED_AS_SEARCH });

export const startAsAddArticle = () => ({ type: STARTED_AS_ADD_ARTICLE });

export const resetState = () => ({ type: IMAGE_SEARCH_RESET });

export const imageSearch = photo => {
  return async dispatch => {
    try {
      dispatch({ type: IMAGE_SEARCH_PROCESSING });
      const response = await axios.post(
        `${settings.backendUrl}/get_plant`,
        photo.base64,
        {
          headers: { 'content-type': 'text/plain' }
        }
      );
      dispatch({ type: FETCH_ARTICLES_PROCESSING });
      getSearchResults(dispatch, response.data.data.plant[0]);
      dispatch({ type: IMAGE_SEARCH_SUCCESS });
    } catch (error) {
      dispatch({
        type: IMAGE_SEARCH_ERROR,
        payload: 'エラーが発生しました。再度写真を撮影してください。'
      });
    }
  };
};
