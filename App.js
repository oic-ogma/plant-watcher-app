import React, { Component } from 'react';
import firebase from 'firebase';
import config from './config';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Router />
    );
  }
}

export default App;
