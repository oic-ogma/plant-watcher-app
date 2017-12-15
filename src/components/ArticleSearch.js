import React, { Component } from 'react';
import { Button, FormValidationMessage } from  'react-native-elements';
import { View, Keyboard, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { SearchBarComponent } from './common/SearchBar';
import { Actions } from 'react-native-router-flux';
import { HideKeyboardOnPress } from './common';

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
      <Image
        source={require ('../assets/images/search-background.jpg')}
        style={imageStyle}
      >
        <HideKeyboardOnPress style={viewStyle}>
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
              onPress={Actions.imagesearch}
            />
          </View>
        </HideKeyboardOnPress>
      </Image>
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
