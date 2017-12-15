import React, { Component } from 'react';
import firebase from 'firebase';
import RouterContainer from './src/containers/RouterContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import { Font } from 'expo';
import settings from './settings.json';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp(settings.firebase);
  }

  componentDidMount() {
    Font.loadAsync({
      'Jandles': require('./src/assets/fonts/jandles.otf'),
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
