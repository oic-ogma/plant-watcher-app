import React from 'react';
import { connect } from 'react-redux';
import ListArticles from '../components/ListArticles';
import { fetchArticles, setArticleDetails } from '../actions';

const ListArticlesContainer = props => {
  return <ListArticles {...props} />;
};

const mapStateToProps = ({ listArticles }) => {
  const { articles, error, loading } = listArticles;
  return { articles, error, loading };
};

const mapDispatchToProps = { fetchArticles, setArticleDetails };

export default connect(mapStateToProps, mapDispatchToProps)(ListArticlesContainer);
