import React from 'react';
import { connect } from 'react-redux';
import { pageMoved, fetchArticles, fetchBookmarks } from '../actions';
import Router from '../components/Router';

const LoginFormContainer = props => (
  <Router {...props} />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = { pageMoved, fetchArticles, fetchBookmarks };

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);

