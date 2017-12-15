import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ListArticles from '../components/common/ListArticles';
import { fetchArticles } from '../actions';

class ListArticlesContainer extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }
  render() {
    return <ListArticles {...this.props} />;
  }
}

const mapStateToProps = ({ listArticles }) => {
  const { list, error, loading } = listArticles;
  let articles = _.map(list, (val, articleId) => {
    return { ...val, key: articleId };
  }).reverse();

  return { articles, error, loading };
};

const mapDispatchToProps = { fetchArticles };

export default connect(mapStateToProps, mapDispatchToProps)(ListArticlesContainer);
