import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Spinner } from './components/common';
import LoginFormContainer from './containers/LoginFormContainer';
import RegistrationFormContainer from './containers/RegistrationFormContainer';
import AddArticleContainer from './containers/AddArticleContainer';
import Home from './components/Home';
import ArticleListContainer from './containers/ArticleListContainer';
import ArticleSearch from './components/ArticleSearch';
import firebase from 'firebase';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged(user => user ? Actions.main() : Actions.auth());
};

const RouterComponent = () => (
  <Router getSceneStyle={()=>({ backgroundColor: '#fff' })}>
    <Scene key='root' hideNavBar={true}>
      <Scene key='loading' onEnter={checkLoginStatus} component={Spinner}/>
      <Scene key='auth'>
        <Scene key='login' component={LoginFormContainer} title='ログイン' panHandlers={null} />
        <Scene key='registration' component={RegistrationFormContainer} title='ユーザー登録' />
      </Scene>
      <Scene key='main'>
        <Scene initial key='home' component={Home} title='ホーム' panHandlers={null} />
        <Scene key='articlesearch' component={ArticleSearch} title='検索' />
        <Scene key='addarticle' component={AddArticleContainer} title='記事投稿' />
        <Scene key='articlelist' component={ArticleListContainer} title='記事一覧' />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
