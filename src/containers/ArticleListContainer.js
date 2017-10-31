import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ArticleList from '../components/ArticleList';
import { getMyArticles } from '../actions';

const ArticleListContainer = props => {
  return <ArticleList {...props} />;
};

const mapStateToProps = ({ articleList }) => {
  const { list, error } = articleList;

  const articles = _.map(list, (val, articleId) => {
    return { ...val, articleId };
  });

  return { articles, error };
};

export default connect(mapStateToProps, {
  getMyArticles
})(ArticleListContainer);
