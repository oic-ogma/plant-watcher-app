import React, { Component } from 'react';
import firebase from 'firebase';
import RouterContainer from './src/containers/RouterContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
<<<<<<< HEAD
import { Font } from 'expo';
=======
import settings from './settings.json';

>>>>>>> 34ae9f8... 17 - カメラを使用できるようにする

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(settings.firebase);
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
