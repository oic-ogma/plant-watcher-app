import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import validator from 'validator';
import {
  PLANT_NAME_CHANGED,
  ARTICLE_CONTENTS_CHANGED,
  ADD_ARTICLE_PROCESSING,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAIL,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLES_PROCESSING,
  TEXT_SEARCH_ARTICLE_SUCCESS,
  TEXT_SEARCH_ARTICLE_FAIL,
  TEXT_SEARCH_ARTICLE_PLANT_NAME_CHANGED,
  PHOTO_CAPTURED
} from './types';

// addArticle
export const plantNameChanged = text => ({
  type: PLANT_NAME_CHANGED,
  payload: text
});

export const articleContentsChanged = text => ({
  type: ARTICLE_CONTENTS_CHANGED,
  payload: text
});

export const searchArticlePlantNameChanged = text => ({
  type: TEXT_SEARCH_ARTICLE_PLANT_NAME_CHANGED,
  payload: text
});

export const saveArticle = (plantName, articleContents, base64) => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;

  if (validator.isInt(plantName) || plantName.length > 25 || plantName === '') {
    return {
      type: ADD_ARTICLE_FAIL,
      payload: '植物名は文字列かつ、25文字以下で入力してください。'
    };
  }
  if (validator.isInt(articleContents) || articleContents.length > 1000 || articleContents === '') {
    return {
      type: ADD_ARTICLE_FAIL,
      payload: '記事内容は文字列かつ、1000文字以下で入力してください。'
    };
  }

  return async dispatch => {
    dispatch({ type: ADD_ARTICLE_PROCESSING });
    try {
      const ref = firebase.database().ref('articles');
      await ref.push({
        plantName, articleContents,
        uid,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        image: `data:image/png;base64,${base64}`
      });
      dispatch({ type: ADD_ARTICLE_SUCCESS });
      Actions.pop();
    } catch (error) {
      dispatch({
        type: ADD_ARTICLE_FAIL,
        payload: '記事投稿に失敗しました'
      });
    }
  };
};

export const savePhoto = photo => {
  Actions.pop();
  return {
    type: PHOTO_CAPTURED,
    payload: photo
  };
};


// listArticles
export const fetchArticles = () => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;
  const ref = firebase.database().ref('articles');

  return dispatch => {
    dispatch({ type: FETCH_ARTICLES_PROCESSING });
    ref.orderByChild('uid').equalTo(uid).on('value', snapshot => {
      if (snapshot.val() != null) {
        dispatch({
          type: FETCH_ARTICLES_SUCCESS,
          payload: snapshot.val()
        });
      } else {
        dispatch({
          type: FETCH_ARTICLES_FAIL,
          payload: '記事が見つかりません',
        });
      }
    });
  };
};

// articleSearch
export const textSearchArticle = plantName => {
  if (!plantName) {
    return {
      type: TEXT_SEARCH_ARTICLE_FAIL,
      payload: '植物名が入力されていません。'
    };
  } else if (plantName.length >= 25) {
    return {
      type: TEXT_SEARCH_ARTICLE_FAIL,
      payload: '植物名が長すぎます。'
    };
  }
  return dispatch => {
    dispatch({ type: TEXT_SEARCH_ARTICLE_SUCCESS });
    dispatch({ type: FETCH_ARTICLES_PROCESSING });
    getSearchResults(dispatch, plantName);
  };
};

export const getSearchResults = (dispatch, plantName) => {
  Actions.searchresults();
  const ref = firebase.database().ref('articles');

  ref.orderByChild('plantName').equalTo(plantName).on('value', snapshot => {
    if (snapshot.val()) {
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: snapshot.val()
      });
    } else {
      dispatch({
        type: FETCH_ARTICLES_FAIL,
        payload: '一致する結果が見つかりませんでした。'
      });
    }
  });
};
