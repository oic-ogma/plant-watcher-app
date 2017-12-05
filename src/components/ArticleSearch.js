import React, { Component } from 'react';
import { Button } from  'react-native-elements';
import { View, Keyboard, ImageBackground } from 'react-native';
import { FormValidationMessage, Text } from 'react-native-elements';
import { SearchBarComponent } from './common/SearchBar';

export default class ArticleSearch extends Component {
  onSubmit() {
    const { textSearchArticle, plantName } = this.props;
    Keyboard.dismiss();
    textSearchArticle(plantName);
  }
  render() {
    const { searchArticlePlantNameChanged, plantName, error } = this.props;
    const { viewStyle, imageStyle, textStyle, containerViewStyle, buttonStyle } = styles;

    return (
      <View style={viewStyle}>
        <ImageBackground
          source={require ('../assets/images/search-background.png')}
          style={imageStyle}
        />

        <Text h1 fontFamily='Great Vibes' style={textStyle}>Plant Watcher</Text>

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
          buttonStyle={buttonStyle}
          raised
          fontSize={23}
          icon={{ name: 'camera-alt' }}
          containerViewStyle={containerViewStyle}
          title='カメラで検索'
          backgroundColor='green'
        />
      </View>
    );
  }
}

const styles = {
  containerViewStyle: {
    marginTop: 10,
    marginBottom: 30
  },
  buttonStyle: {
    height: '48%',
    width: '60%',
    marginLeft: '21%'
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    height: 650
  },
  textStyle: {
    marginBottom: '15%',
    marginTop: '15%',
    fontWeight: 85,
    textAlign: 'center',
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  viewStyle: {
    backgroundColor: 'rgba(0,0,0,0)'
  }
};
