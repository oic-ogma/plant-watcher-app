import React from 'react';
import { connect } from 'react-redux';
import { pageMoved } from '../actions';
import Router from '../components/Router';

const LoginFormContainer = props => (
  <Router {...props} />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = { pageMoved };

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);

