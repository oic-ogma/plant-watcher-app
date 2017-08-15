import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import config from './config';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Text>Plant watcher app</Text>
      </View>
    );
  }
}
