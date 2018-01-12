import React, { Component } from 'react';
import { Button, FormValidationMessage } from  'react-native-elements';
import { View, Keyboard, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { SearchBarComponent } from './common/SearchBar';
import { Actions } from 'react-native-router-flux';
import { HideKeyboardOnPress } from './common';
import firebase from 'firebase';

export default class ArticleSearch extends Component {
  onSubmit() {
    const { textSearchArticle, plantName } = this.props;
    Keyboard.dismiss();
    textSearchArticle(plantName);
  }

  takePhoto() {
    this.props.startAsSearch();
    const { currentUser } = firebase.auth();
    currentUser ?  Actions.camera() : Actions.cameraauth();
  }

  render() {
    const { searchArticlePlantNameChanged, plantName, error } = this.props;
    const { viewStyle, imageStyle, textStyle, containerViewStyle, buttonStyle } = styles;

    return (
      <HideKeyboardOnPress style={viewStyle}>
        <Image
          source={require ('../assets/images/search-background.jpg')}
          style={imageStyle}
        />

        <View style={{ flex: 0.2 }}>
          <Text h1 fontFamily='Jandles' style={textStyle}>Plant Watcher</Text>
        </View>

        <View style={{ flex: 0.15, flexDirection: 'row' }}>
          <SearchBarComponent
            onChangeText={searchArticlePlantNameChanged}
            placeholder='植物名'
            onSubmitEditing={this.onSubmit.bind(this)}
            value={plantName}
          />
        </View>

        <FormValidationMessage>
          {error}
        </FormValidationMessage>

        <View style={{ flex: 0.2, flexDirection: 'row' }}>
          <Button
            buttonStyle={buttonStyle}
            raised
            fontSize={18}
            icon={{ name: 'camera-alt' }}
            containerViewStyle={containerViewStyle}
            title='カメラで検索'
            backgroundColor='#2C9D46'
            onPress={this.takePhoto.bind(this)}
          />
        </View>
      </HideKeyboardOnPress>
    );
  }
}

const styles = {
  containerViewStyle: {
    flex: 0.6,
  },
  buttonStyle: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  imageStyle: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 60
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};
