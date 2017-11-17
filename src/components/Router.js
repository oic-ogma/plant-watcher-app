import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Spinner } from './common';
import LoginFormContainer from '../containers/LoginFormContainer';
import RegistrationFormContainer from '../containers/RegistrationFormContainer';
import AddArticleContainer from '../containers/AddArticleContainer';
import Home from './Home';
import ArticleSearchContainer from '../containers/ArticleSearchContainer';
import ListArticlesContainer from '../containers/ListArticlesContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';
import firebase from 'firebase';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged(user => user ? Actions.main() : Actions.auth());
};

const RouterComponent = ({ pageMoved }) => (
  <Router getSceneStyle={()=>({ backgroundColor: '#fff' })}>
    <Scene key='root' hideNavBar={true}>
      <Scene key='loading' onEnter={checkLoginStatus} component={Spinner}/>
      <Scene key='auth'>
        <Scene key='login' onExit={pageMoved} component={LoginFormContainer} title='ログイン' panHandlers={null} />
        <Scene key='registration' onEnter={pageMoved} component={RegistrationFormContainer} title='ユーザー登録' />
      </Scene>
      <Scene key='main'>
        <Scene initial key='home' component={Home} title='ホーム' panHandlers={null} />
        <Scene key='articlesearch' component={ArticleSearchContainer} title='検索' />
        <Scene key='addarticle' component={AddArticleContainer} title='記事投稿' />
        <Scene key='listarticles' component={ListArticlesContainer} title='記事一覧' />
        <Scene key='searchresults' component={SearchResultsContainer} title='検索結果' />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
