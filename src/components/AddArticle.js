import React, { Component } from 'react';
import { View } from 'react-native';
import { Label, FormInputComponent } from './common';
import { FormValidationMessage, Button } from 'react-native-elements';

export default class AddArticle extends Component {
  saveArticle() {
    const { plantName, articleContents, saveArticle } = this.props;
    saveArticle(plantName, articleContents);
  }

  render() {
    const {
      plantName,
      articleContents,
      plantNameChanged,
      articleContentsChanged,
      error
    } = this.props;

    return (
      <View>
        <Label placeholder='植物名' />
        <FormInputComponent
          onChangeText={plantNameChanged}
          placeholder='ひまわり'
          value={plantName}
        />

        <Label placeholder='記事'/>
        <FormInputComponent
          placeholder='黄色い'
          onChangeText={articleContentsChanged}
          multiline={true}
          value={articleContents}
        />
        <FormValidationMessage labelStyle={{ fontSize: 16 }}>{error}</FormValidationMessage>

        <Button
          onPress={this.saveArticle.bind(this)}
          title='投稿'
          raised
          large
          loading={this.props.loading}
          backgroundColor='green'
        />

      </View>
    );
  }
}
