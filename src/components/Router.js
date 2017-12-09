import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Spinner, IconWrapper } from './common';
import LoginFormContainer from '../containers/LoginFormContainer';
import RegistrationFormContainer from '../containers/RegistrationFormContainer';
import AddArticleContainer from '../containers/AddArticleContainer';
import ArticleSearchContainer from '../containers/ArticleSearchContainer';
import ListArticlesContainer from '../containers/ListArticlesContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';
import firebase from 'firebase';
import ImageSearchContainer from '../containers/ImageSearchContainer';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged(user => user ? Actions.main() : Actions.auth());
};

const RouterComponent = ({ pageMoved }) => (
  <Router getSceneStyle={()=>({ backgroundColor: '#fff' })}>
    <Scene key='root' hideNavBar={true}>
      <Scene key='loading' onEnter={checkLoginStatus} component={Spinner}/>
      <Scene key='auth'>
        <Scene
          key='login'
          onExit={pageMoved}
          component={LoginFormContainer}
          title='ログイン'
          panHandlers={null}
        />
        <Scene
          key='registration'
          onEnter={pageMoved}
          component={RegistrationFormContainer}
          title='ユーザー登録'
        />
      </Scene>
      <Scene key='main' tabs showLabel={false}>
        <Scene
          initial
          hideNavBar={true}
          key='articlesearch'
          component={ArticleSearchContainer}
          tabBarLabel='検索'
          icon={IconWrapper}
          type='simple-line-icon'
          name='magnifier'
        />
        <Scene
          key='addarticle'
          component={AddArticleContainer}
          tabBarLabel='記事投稿'
          title='記事投稿'
          icon={IconWrapper}
          type='simple-line-icon'
          name='note'
        />
        <Scene
          key='searchresults'
          component={SearchResultsContainer}
          tabBarLabel='検索結果'
          title='検索結果'
          icon={IconWrapper}
          type='font-awesome'
          name='bookmark-o'
        />
        <Scene
          key='listarticles'
          component={ListArticlesContainer}
          tabBarLabel='記事一覧'
          title='ユーザー記事一覧'
          icon={IconWrapper}
          type='simple-line-icon'
          name='user'
        />
      </Scene>
      <Scene key='imagesearch' component={ImageSearchContainer} title='写真で検索'/>
    </Scene>
  </Router>
);

export default RouterComponent;
