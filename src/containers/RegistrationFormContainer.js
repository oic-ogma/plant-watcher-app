import React from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, registerUser } from '../actions';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationFormContainer = (props) => (
  <RegistrationForm {...props} />
);

const mapStateToProps = ({ auth }) => {
  const { email, password, loding, error } = auth;
  return { email, password, loding, error };
};

const mapDispatchToProps = { emailChanged, passwordChanged, registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormContainer);
