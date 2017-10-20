import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner, Error } from './common';

class RegistrationForm extends Component {
  onEmailChange (text) {
    this.props.emailChanged(text);
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text);
  }

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
    return (
      <Card>
        <CardSection>
          <Input
            label='メールアドレス'
            placeholder='example@hoge.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='パスワード'
            placeholder='パスワード'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Error message={this.props.error}/>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

export default RegistrationForm;
