import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PROCESSING,
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

export const userAuthSuccess = (dispatch, user) => {
  dispatch({
    type: USER_AUTH_SUCCESS,
    payload: user,
  });

  Actions.main();
};

export const userAuthFail = (dispatch, error) => {
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
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then (user => userAuthSuccess(dispatch, user))
      .catch (error => userAuthFail(dispatch, error));
  };
};

export const registerUser = (email, password) => {
  return dispatch => {
    dispatch({ type: PROCESSING });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then (user=>userAuthSuccess(dispatch, user))
      .catch (error=>userAuthFail(dispatch, error));
  };
};

