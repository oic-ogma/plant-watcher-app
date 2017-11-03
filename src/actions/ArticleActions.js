import firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';
import validator from 'validator';
import {
  PLANT_NAME_CHANGED,
  ARTICLE_CONTENTS_CHANGED,
  ADD_ARTICLE_PROCESSING,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAIL
} from './types';

export const plantNameChanged = text => ({
  type: PLANT_NAME_CHANGED,
  payload: text
});

export const articleContentsChanged = text => ({
  type: ARTICLE_CONTENTS_CHANGED,
  payload: text
});

export const saveArticle = (plantName, articleContents) => {
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

  return dispatch => {
    dispatch({ type: ADD_ARTICLE_PROCESSING });
    const ref = firebase.database().ref('articles');
    return ref
      .push({ plantName, articleContents, uid })
      .then(() => {
        dispatch({ type: ADD_ARTICLE_SUCCESS });
        // Actions.pop();
      });
  };
};
