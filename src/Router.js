import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Home from './components/Home';

const RouterComponent = () => (
  <Router getSceneStyle={()=>({ backgroundColor: '#fff' })}>
    <Scene key='root' hideNavBar={true}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='ログイン' />
        <Scene key='registration' component={RegistrationForm} title='ユーザー登録' />
      </Scene>

      <Scene key='main'>
        <Scene initial key='home' component={Home} title='ホーム' />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
