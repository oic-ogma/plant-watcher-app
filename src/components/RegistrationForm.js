import React, { Component } from 'react';
import { Error, Label, FormInputComponent, HideKeyboardOnPress } from './common';
import { Button } from 'react-native-elements';

export default class RegistrationForm extends Component {
  onButtonPress () {
    const { email, password, registerUser } = this.props;
    registerUser(email, password);
  }

  renderButton () {

    return (
      <Button onPress={this.onButtonPress.bind(this)}
        raised
        large
        loading={this.props.loading}
        loadingRight={true}
        title='登録'
        backgroundColor='#228b22'/>

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

        {this.renderButton()}

      </HideKeyboardOnPress>
    );
  }
}
