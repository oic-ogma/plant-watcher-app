import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddArticleReducer from './AddArticleReducer';
import ArticleListReducer from './ArticleReducer';

export default combineReducers ({
  auth: AuthReducer,
  addArticle: AddArticleReducer,
  articleList: ArticleListReducer
});
