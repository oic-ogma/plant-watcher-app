import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginFormContainer from './containers/LoginFormContainer';
import RegistrationFormContainer from './containers/RegistrationFormContainer';
import AddArticleContainer from './containers/AddArticleContainer';
import Home from './components/Home';
import ArticleSearch from './components/ArticleSearch';

const RouterComponent = () => (
  <Router getSceneStyle={()=>({ backgroundColor: '#fff' })}>
    <Scene key='root' hideNavBar={true}>
      <Scene key='auth'>
        <Scene key='login' component={LoginFormContainer} title='ログイン' />
        <Scene key='registration' component={RegistrationFormContainer} title='ユーザー登録' />
      </Scene>
      <Scene key='main'>
        <Scene initial key='home' component={Home} title='ホーム' />
        <Scene key='articlesearch' component={ArticleSearch} title='検索' />
        <Scene key='addarticle' component={AddArticleContainer} title='記事投稿' />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
