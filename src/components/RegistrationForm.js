import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner, Error } from './common';

export default class RegistrationForm extends Component {
  onButtonPress () {
    const { email, password, registerUser } = this.props;
    registerUser(email, password);
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        登録
      </Button>
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

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}
