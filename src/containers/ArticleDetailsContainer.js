import React from 'react';
import { connect } from 'react-redux';
import ArticleDetails from '../components/ArticleDetails';
import { fetchArticleDetails } from '../actions';

const ArticleDetailsContainer = props => (
  <ArticleDetails {...props} />
);

const mapStateToProps = ({ articleDetails }) => {
  const { article, editable } = articleDetails;

  const {
    plantName,
    articleContents,
    createdAt,
    currentRating,
  } = article;

  return { plantName, articleContents, createdAt, currentRating, editable };
};

const mapDispatchToProps = { fetchArticleDetails };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailsContainer);
