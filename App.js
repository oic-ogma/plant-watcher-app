import React, { Component } from 'react';
import firebase from 'firebase';
import config from './config';
import Router from './src/Router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import { addNavigationHelpers } from 'react-navigation';
import AppContainer from './src/containers/AppContainer';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
