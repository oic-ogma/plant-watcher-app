import React from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, userLogin } from '../actions';
import LoginForm from '../components/LoginForm';

const LoginFormContainer = (props) => (
  <LoginForm {...props} />
);
const mapStateToProps = ({ auth }) => {
  const { email, password, loding, error } = auth;
  return { email, password, loding, error };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, userLogin
})(LoginFormContainer);
