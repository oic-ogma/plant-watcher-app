import React from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, userLogin } from '../actions';
import LoginForm from '../components/LoginForm';

const LoginFormContainer = props => (
  <LoginForm {...props} />
);

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error } = auth;
  return { email, password, loading, error };
};

const mapDispatchToProps = { emailChanged, passwordChanged, userLogin };

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
