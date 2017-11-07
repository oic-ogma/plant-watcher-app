import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddArticleReducer from './AddArticleReducer';
import ListArticlesReducer from './ListArticlesReducer';

export default combineReducers ({
  auth: AuthReducer,
  addArticle: AddArticleReducer,
  listArticles: ListArticlesReducer
});
