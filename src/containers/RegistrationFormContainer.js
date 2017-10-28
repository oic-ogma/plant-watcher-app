import React from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, registerUser } from '../actions';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationFormContainer = props => (
  <RegistrationForm {...props} />
);

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error } = auth;
  return { email, password, loading, error };
};

const mapDispatchToProps = { emailChanged, passwordChanged, registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormContainer);
