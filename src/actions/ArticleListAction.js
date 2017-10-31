import firebase from 'firebase';
import {
  FETCH_ARTICLES_SUCSESS,
  FETCH_ARTICLES_FAIL,
  PROCESSING
} from './types';

const fetchArticlesFail = (dispatch, error) => {
  dispatch({
    type: FETCH_ARTICLES_FAIL,
    payload: error,
  });
};

const fetchArticlesSuccess = (dispatch, articles) => {
  dispatch ({
    type: FETCH_ARTICLES_SUCSESS,
    payload: articles,
  });
};

export const getMyArticles = () => {
  const { currentUser } = firebase.auth();
  const { uid } = currentUser;

  const articleRef = firebase.database().ref('/articles/');
  return (dispatch) => {
    articleRef.orderByChild('uid').equalTo(uid).on('value', snapshot => {
      if (snapshot.val() != null) {
        fetchArticlesSuccess(dispatch, snapshot.val());
      } else {
        fetchArticlesFail(dispatch, '記事が見つかりません');
      }
    });
  };
};
