import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import TestComponent from './components/TestComponent';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="temporary" component={TestComponent} title="一時的なページ" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
