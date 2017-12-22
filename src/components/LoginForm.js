import React, { Component } from 'react';
import { Label, Error, FormInputComponent, HideKeyboardOnPress } from './common';
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
      <HideKeyboardOnPress>
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
      </HideKeyboardOnPress>
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
