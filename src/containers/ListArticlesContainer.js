import React from 'react';
import { connect } from 'react-redux';
import ListArticles from '../components/common/ListArticles';
import { fetchArticles } from '../actions';

const ListArticlesContainer = props => {
  return <ListArticles {...props} />;
};

const mapStateToProps = ({ listArticles }) => {
  const { articles, error, loading } = listArticles;
  return { articles, error, loading };
};

const mapDispatchToProps = { fetchArticles };

export default connect(mapStateToProps, mapDispatchToProps)(ListArticlesContainer);
