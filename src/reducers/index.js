import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddArticleReducer from './AddArticleReducer';

export default combineReducers ({
  auth: AuthReducer,
  addArticle: AddArticleReducer
});
