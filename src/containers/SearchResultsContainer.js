import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ListArticles from '../components/common/ListArticles';
import { fetchArticles } from '../actions';

const SearchResultsContainer = props => {
  return <ListArticles {...props} />;
};

const mapStateToProps = ({ listArticles }) => {
  const { list, error, loading } = listArticles;
  const articles = _.map(list, (val, articleId) => {
    return { ...val, key: articleId };
  }).reverse();

  return { articles, error, loading };
};

const mapDispatchToProps = { fetchArticles };

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);