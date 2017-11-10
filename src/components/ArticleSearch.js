import React, { Component } from 'react';
import { Button } from  'react-native-elements';
import { View, Keyboard } from 'react-native';
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
          hasText={!!plantName}
          onSubmitEditing={this.onSubmit.bind(this)}
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

const styles = {
  buttonStyle: {
    marginTop: 50,
    marginBottom: 30
  }
};
