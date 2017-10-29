import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH_PROCESSING,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL,
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

const userAuthSuccess = dispatch => {
  dispatch({ type: USER_AUTH_SUCCESS });

  Actions.main();
};

const userAuthFail = (dispatch, error) => {
  let errorMessage = '';
  switch (error.code) {
    case 'auth/invalid-email':
      errorMessage = 'メールアドレスの形式が正しくありません';
      break;
    case 'auth/email-already-in-use':
      errorMessage = 'このメールアドレスは既に使用されています';
      break;
    case 'auth/weak-password':
      errorMessage = 'パスワードは6文字以上にしてください';
      break;
    case 'auth/user-not-found':
      errorMessage = 'ユーザーが見つかりません';
      break;
    case 'auth/wrong-password':
      errorMessage = 'パスワードが間違っています';
      break;
  }
  dispatch({
    type: USER_AUTH_FAIL,
    payload: errorMessage
  });
};

export const userLogin = (email, password) => {
  return dispatch => {
    dispatch({ type: AUTH_PROCESSING });

    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then (() => userAuthSuccess(dispatch))
      .catch (error => userAuthFail(dispatch, error));
  };
};

export const registerUser = (email, password) => {
  return dispatch => {
    dispatch({ type: AUTH_PROCESSING });

    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then (()=>userAuthSuccess(dispatch))
      .catch (error=>userAuthFail(dispatch, error));
  };
};

