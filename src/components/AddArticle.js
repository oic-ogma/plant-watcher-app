import React, { Component } from 'react';
import { Keyboard, Image, View } from 'react-native';
import { FormValidationMessage, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { ImagePicker } from 'expo';
import { Label, FormInputComponent, HideKeyboardOnPress } from './common';

export default class AddArticle extends Component {
  saveArticle() {
    const { plantName, articleContents, saveArticle, photo } = this.props;
    Keyboard.dismiss();
    saveArticle(plantName, articleContents, photo.base64);
  }

  takePhoto() {
    this.props.startAsAddArticle();
    Actions.camera();
  }

  async pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (!result.cancelled) {
      this.props.savePhoto(result);
    }
  }

  render() {
    const {
      plantName,
      articleContents,
      plantNameChanged,
      articleContentsChanged,
      error,
      photo
    } = this.props;

    return (
      <HideKeyboardOnPress style={{ flex: 1,flexDirection: 'column' }}>
        <View style={{ flex: 0.4, flexDirection: 'row'  }}>
          <View  style={{ flex: 0.5 }}>
            <Image
              source={photo || require('../assets/images/image-not-found-small.png')}
              style={{ width: 200, height: 200 }}
              resizeMode='contain'
            />
          </View>

          <View style={{ flex: 0.5, flexDirection: 'column', marginLeft: 25 }}>
            <Button
              onPress={this.takePhoto.bind(this)}
              raised
              backgroundColor='green'
              large
              icon={{ name:'camera', type: 'simple-line-icon' }}
              containerViewStyle={{ flex: 0.5, marginTop: 20, }}
            />

            <Button
              onPress={this.pickImage.bind(this)}
              raised
              backgroundColor='green'
              large
              icon={{ name:'picture', type: 'simple-line-icon' }}
              containerViewStyle={{ flex: 0.5 }}
            />
          </View>
        </View>

        <View style={{ flex: 0.15 }}>
          <Label placeholder='植物名' />
          <FormInputComponent
            onChangeText={plantNameChanged}
            placeholder='ひまわり'
            value={plantName}
          />
        </View>

        <View style={{ flex: 0.35 }}>
          <Label placeholder='記事' />
          <FormInputComponent
            placeholder='黄色い'
            onChangeText={articleContentsChanged}
            multiline={true}
            value={articleContents}
          />
        </View>

        <FormValidationMessage labelStyle={{ fontSize: 16 }}>
          {error}
        </FormValidationMessage>

        <View style={{ flex: 0.1 }}>
          <Button
            onPress={this.saveArticle.bind(this)}
            title='投稿'
            raised
            large
            loading={this.props.loading}
            backgroundColor='green'
          />
        </View>
      </HideKeyboardOnPress>
    );
  }
}

