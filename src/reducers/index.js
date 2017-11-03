import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddArticleReducer from './AddArticleReducer';
import NavReducer from './NavReducer';

export default combineReducers ({
  auth: AuthReducer,
  addArticle: AddArticleReducer,
  nav: NavReducer,
});
