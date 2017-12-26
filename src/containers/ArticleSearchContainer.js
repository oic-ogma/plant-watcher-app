import React from 'react';
import { connect } from 'react-redux';
import {
  textSearchArticle,
  searchArticlePlantNameChanged,
  startAsSearch,
} from '../actions';
import ArticleSearch from '../components/ArticleSearch';

const ArticleSearchContainer = props => (
  <ArticleSearch {...props} />
);

const mapStateToProps = ({ searchArticle }) => {
  const { plantName, error } = searchArticle;
  return { plantName, error };
};

const mapDispatchToProps = { textSearchArticle, searchArticlePlantNameChanged, startAsSearch };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSearchContainer);
