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
import { IconWrapper } from './common';
import ImageSearchContainer from '../containers/ImageSearchContainer';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged(user => user ? Actions.auth() : Actions.auth());
};

const RouterComponent = ({ pageMoved }) => (
  <Router getSceneStyle={()=>({ backgroundColor: '#fff' })}>
    <Scene key='root' hideNavBar={true}>
      <Scene key='loading' onEnter={checkLoginStatus} component={Spinner}/>
      <Scene
        key='auth'
        tabs={true}
        tabBarPosition='bottom'
        activeBackgroundColor='#fff'
        activeTintColor='green'
        inactiveBackgroundColor='#fff'
        inactiveTintColor='gray'
        tabBarStyle={{ backgroundColor: '#fff' }}
        hideNavBar={true}
        labelStyle={{ fontSize: 15 }}
      >
        <Scene
          key='articlesearch'
          title='検索'
          component={ArticleSearchContainer}
          name='magnifier'
          type='simple-line-icon'
          icon={IconWrapper}
          hideNavBar={true}
        />
        <Scene
          key='login'
          onExit={pageMoved}
          component={LoginFormContainer}
          title='ログイン'
          tabBarLabel='ログイン'
          panHandlers={null}
          name='login'
          type='simple-line-icon'
          icon={IconWrapper}
        />

        <Scene
          key='registration'
          onEnter={pageMoved}
          component={RegistrationFormContainer}
          title='ユーザー登録'
          tabBarLabel='ユーザ登録'
          name='note'
          type='simple-line-icon'
          icon={IconWrapper}
        />
      </Scene>
      <Scene key='main'>
        <Scene initial key='home' component={Home} title='ホーム' panHandlers={null} />
        <Scene key='articlesearch' component={ArticleSearchContainer} title='検索' />
        <Scene key='addarticle' component={AddArticleContainer} title='記事投稿' />
        <Scene key='listarticles' component={ListArticlesContainer} title='記事一覧' />
        <Scene key='imagesearch' component={ImageSearchContainer} title='写真で検索'/>
        <Scene key='searchresults' component={SearchResultsContainer} title='検索結果' />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
