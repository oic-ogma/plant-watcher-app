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
  PHOTO_CAPTURED,
  SET_ARTICLE_DETAILS,
  CAN_EDIT,
  CANNOT_EDIT,
  IS_BOOKMARKED,
  IS_NOT_BOOKMARKED,
  BOOKMARK_PROCESSING,
} from './types';
import _ from 'lodash';

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
  return async dispatch => {
    dispatch({ type: FETCH_ARTICLES_PROCESSING });

    let articles = await ref.orderByChild('uid').equalTo(uid).once('value');
    if (articles.val()) {
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: _.map(articles.val(), (val, articleId) => ({ ...val, key: articleId })).reverse(),
      });
    } else {
      dispatch({
        type: FETCH_ARTICLES_FAIL,
        payload: '記事が見つかりません',
      });
    }
  };
};

export const fetchBookmarks = () => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;
  const bookmarkRef = firebase.database().ref(`users/${uid}/bookmarks`);
  const articleRef = firebase.database().ref('articles');
  return async dispatch => {
    dispatch({ type: FETCH_ARTICLES_PROCESSING });

    let bookmarks = await bookmarkRef.once('value');
    bookmarks = _.map(bookmarks.val(), val => val.articleId);

    const articlePromises = bookmarks.map(async id => {
      return await articleRef.child(id).once('value');
    });

    let articles = await Promise.all(articlePromises);
    articles = articles.map((article, index)=> {
      let data = article.val();
      data.key = bookmarks[index];
      return data;
    });

    if (articles[0]) {
      dispatch({
        type: FETCH_ARTICLES_SUCCESS,
        payload: articles,
      });
    } else {
      dispatch({
        type: FETCH_ARTICLES_FAIL,
        payload: 'ブックマークがありません',
      });
    }
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

export const getSearchResults = async (dispatch, plantName) => {
  const { currentUser } = firebase.auth();
  currentUser ? Actions.searchresults() : Actions.searchresultsauth();
  const ref = firebase.database().ref('articles');

  let articles = await ref.orderByChild('plantName').equalTo(plantName).once('value');
  if (articles.val()) {
    articles = _.map(articles.val(), (val, articleId) => ({ ...val, key: articleId })).reverse();
    dispatch({
      type: FETCH_ARTICLES_SUCCESS,
      payload: articles.reverse(),
    });
  } else {
    dispatch({
      type: FETCH_ARTICLES_FAIL,
      payload: '記事が見つかりません',
    });
  }
};

// articleDetails
export const setArticleDetails = article => {
  return dispatch => {
    const { currentUser } = firebase.auth();

    if (currentUser) {
      checkOwnership(article.uid, dispatch);
      checkBookmark(article.key, dispatch);
    }
    dispatch({
      type: SET_ARTICLE_DETAILS,
      payload: article
    });
  };
};

const checkOwnership = (articleUid, dispatch) => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;
  uid === articleUid ? dispatch({ type: CAN_EDIT }) : dispatch({ type: CANNOT_EDIT });
};

const checkBookmark = async (articleId, dispatch) => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;
  const ref = firebase.database().ref(`users/${uid}/bookmarks`);
  const bookmarks = await ref.orderByChild('articleId').equalTo(articleId).once('value');
  bookmarks.val() ? dispatch({ type: IS_BOOKMARKED }) : dispatch({ type: IS_NOT_BOOKMARKED });
};

export const addBookmark = articleId => {
  return async dispatch => {
    dispatch({ type: BOOKMARK_PROCESSING });
    const { currentUser } = firebase.auth();
    const { uid } = currentUser;
    const ref = firebase.database().ref(`users/${uid}/bookmarks`);
    await ref.push({ articleId });
    dispatch({ type: IS_BOOKMARKED });
  };
};

export const removeBookmark = articleId => {
  return async dispatch => {
    dispatch({ type: BOOKMARK_PROCESSING });
    const { currentUser } = firebase.auth();
    const { uid } = currentUser;
    const ref = firebase.database().ref(`users/${uid}/bookmarks`);
    const article = await ref.orderByChild('articleId').equalTo(articleId).once('value');
    await ref.child(Object.keys(article.val())[0]).remove();
    dispatch({ type: IS_NOT_BOOKMARKED });
  };
};
