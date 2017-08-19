import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PROCESSING,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
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

export const userRegistrationSuccess = (dispatch, user) => {
  dispatch({
    type: USER_REGISTRATION_SUCCESS,
    payload: user,
  });

  Actions.main();
};

export const userRegistrationFail = (dispatch, error) => {
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
  }
  dispatch({
    type: USER_REGISTRATION_FAIL,
    payload: errorMessage
  });
};

export const registerUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: PROCESSING });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then (user=>userRegistrationSuccess(dispatch, user))
      .catch (error=>userRegistrationFail(dispatch, error));
  };
};

