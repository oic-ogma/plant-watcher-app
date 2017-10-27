import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  FETCH_ARTICLES_SUCSESS,
  FETCH_ARTICLES_FAIL,
  PROCESSING
} from './types';

export const getMyArticles = () => {
  const uid = firebase.auth().currentUser.uid ;

  const articleRef = firebase.database().ref('/articles/');
  return (dispatch) => {
    articleRef.orderByChild('uid').equalTo(uid).on('value', snapshot => {
      dispatch ({
        type: FETCH_ARTICLES_SUCSESS,
        payload: snapshot.val(),
      });
    });
  };
};
