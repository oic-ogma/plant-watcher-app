import React from 'react';
import ArticleList from '../components/ArticleList';
import { getMyArticles } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';


const ArticleListContainer = props => (
  <ArticleList {...props}/>
);

const mapStateToProps = state => {
  const articles = _.map(state.articleList.list, (val, articleId) => {
    return { ...val, articleId };
  });
  return { articles };
};

export default connect(mapStateToProps, {
  getMyArticles
})(ArticleListContainer);
