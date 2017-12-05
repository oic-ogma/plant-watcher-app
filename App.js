import React, { Component } from 'react';
import firebase from 'firebase';
import config from './config';
import RouterContainer from './src/containers/RouterContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import { Font } from 'expo';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  componentDidMount() {
    Font.loadAsync({
      'Great Vibes': require('./src/assets/fonts/GreatVibes-Regular.ttf'),
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterContainer />
      </Provider>
    );
  }
}

export default App;
