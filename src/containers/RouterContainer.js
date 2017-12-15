import React from 'react';
import { connect } from 'react-redux';
import { pageMoved, fetchArticles } from '../actions';
import Router from '../components/Router';

const LoginFormContainer = props => (
  <Router {...props} />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = { pageMoved, fetchArticles };

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);

