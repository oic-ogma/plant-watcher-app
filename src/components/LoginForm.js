import React, { Component } from 'react';
import { Label, Error, FormInputComponent } from './common';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Platform } from 'react-native';

export default class LoginForm extends Component {
  onButtonPress() {
    const { email, password } = this.props;

    this.props.userLogin(email, password);
  }

  renderButtons() {
    return (
      <View>
        <Button style={style.buttonStyle}
          onPress={this.onButtonPress.bind(this)}
          raised
          large
          loading={this.props.loading}
          loadingRight={true}
          title='ログイン'
          backgroundColor='blue'/>

        <Button style={style.buttonStyle}
          onPress={Actions.registration}
          raised
          large
          title='ユーザー登録'
          backgroundColor='#228b22'/>
      </View>
    );
  }

  render() {
    const {
      email,
      password,
      emailChanged,
      passwordChanged,
      error
    } = this.props;

    return (
      <View style={style.margin}>
        <Label placeholder='メールアドレス'/>
        <FormInputComponent
          placeholder='example@hoge.com'
          onChangeText={emailChanged}
          value={email}
        />

        <Label placeholder='パスワード'/>
        <FormInputComponent
          secureTextEntry
          placeholder='パスワード'
          onChangeText={passwordChanged}
          value={password}
        />

        <Error message={error}/>

        {this.renderButtons()}
      </View>
    );
  }
}

const style = {
  buttonStyle: {
    marginBottom: 5,
    ...Platform.select({
      android: {
        marginBottom: 5
      }
    })
  },
  margin: {
    marginTop: 140,
  }
};
