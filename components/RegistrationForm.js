import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChanged, passwordChanged, registerUser } from '../actions';

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

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

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

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error } = auth;
  return { email, password, loading, error };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, registerUser
})(RegistrationForm);


