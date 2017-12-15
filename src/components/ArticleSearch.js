import React, { Component } from 'react';
import { Button } from  'react-native-elements';
import { View, Keyboard, StyleSheet } from 'react-native';
import { FormValidationMessage } from 'react-native-elements';
import { SearchBarComponent } from './common/SearchBar';

export default class ArticleSearch extends Component {
  onSubmit() {
    const { textSearchArticle, plantName } = this.props;
    Keyboard.dismiss();
    textSearchArticle(plantName);
  }
  render() {
    const { searchArticlePlantNameChanged, plantName, error } = this.props;
    const { buttonStyle } = styles;

    return (
      <View style={{ marginTop: 140 }}>
        <SearchBarComponent
          onChangeText={searchArticlePlantNameChanged}
          placeholder='植物名'
          onSubmitEditing={this.onSubmit.bind(this)}
          value={plantName}
        />

        <FormValidationMessage>
          {error}
        </FormValidationMessage>

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

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 50,
    marginBottom: 30
  }
});
