import React, { Component } from 'react';
import { Button, Card, CardSection, Spinner, Input, Error } from './common';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';

export default class LoginForm extends Component {
  onButtonPress() {
    const { email, password } = this.props;

    this.props.userLogin(email, password);
  }

  renderButtons() {
    if (this.props.loading) {
      return <CardSection><Spinner size='large' /></CardSection>;
    }
    return (
      <View>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            ログイン
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={Actions.registration}>
            ユーザー登録
          </Button>
        </CardSection>
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
      <Card>
        <CardSection>
          <Input
            label='メールアドレス'
            placeholder='example@hoge.com'
            onChangeText={emailChanged}
            value={email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='パスワード'
            placeholder='パスワード'
            onChangeText={passwordChanged}
            value={password}
          />
        </CardSection>

        <Error message={error}/>

        {this.renderButtons()}
      </Card>
    );
  }
}
