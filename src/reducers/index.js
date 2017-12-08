import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddArticleReducer from './AddArticleReducer';
import ListArticlesReducer from './ListArticlesReducer';
import ImageSearchReducer from './ImageSearchReducer';
import SearchArticleReducer from './SearchArticleReducer';

export default combineReducers ({
  auth: AuthReducer,
  addArticle: AddArticleReducer,
  listArticles: ListArticlesReducer,
  imageSearch: ImageSearchReducer,
  searchArticle: SearchArticleReducer
});
