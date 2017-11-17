import React from 'react';
import { connect } from 'react-redux';
import { textSearchArticle, searchArticlePlantNameChanged } from '../actions';
import ArticleSearch from '../components/ArticleSearch';

const ArticleSearchContainer = props => (
  <ArticleSearch {...props} />
);

const mapStateToProps = ({ searchArticle }) => {
  const { plantName, error } = searchArticle;
  return { plantName, error };
};

const mapDispatchToProps = { textSearchArticle, searchArticlePlantNameChanged };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSearchContainer);
