import React, { Component } from 'react';
import { Button } from  'react-native-elements';
import { View } from 'react-native';
import { SearchBarComponent } from './common/SearchBar';

export default class ArticleSearch extends Component {
  render() {
    const { buttonStyle } = styles;
    return (
      <View style={{ marginTop: 140 }}>
        <SearchBarComponent
          placeholder='植物名'
        />

        <Button
          raised
          large
          icon={{ name: 'camera-alt' }}
          containerViewStyle={buttonStyle}
          title='カメラで撮影して検索'
          backgroundColor='green'
        />
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    marginTop: 50,
    marginBottom: 30
  }
};
