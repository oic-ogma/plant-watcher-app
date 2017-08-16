import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import TestComponent from './components/TestComponent';
import Home from './components/Home';

const RouterComponent = () => (
  <Router getSceneStyle={()=>({ backgroundColor: '#fff' })}>
    <Scene key="root" hideNavBar={true}>
      <Scene key="auth">
        <Scene key="temporary" component={TestComponent} title="一時的なページ" />
      </Scene>

      <Scene key="main">
        <Scene key="home" component={Home} title="ホーム" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
