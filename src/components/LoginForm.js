import React, { Component } from 'react';
import { Button, Card, CardSection, Spinner, Input } from './common';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';

class LoginForm extends Component {
  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

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
    return (
      <Card>
        <CardSection>
          <Input
            label='メールアドレス'
            placeholder='example@hoge.com'
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='パスワード'
            placeholder='パスワード'
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        {this.renderButtons()}
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    paddingTop: 5,
    fontSize: 18,
    alignSelf: 'center',
    color: '#FF0000',
  }
};

export default LoginForm;
