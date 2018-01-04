import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AddArticleReducer from './AddArticleReducer';
import ListArticlesReducer from './ListArticlesReducer';
import CameraReducer from './CameraReducer';
import SearchArticleReducer from './SearchArticleReducer';

export default combineReducers ({
  auth: AuthReducer,
  addArticle: AddArticleReducer,
  listArticles: ListArticlesReducer,
  camera: CameraReducer,
  searchArticle: SearchArticleReducer
});
