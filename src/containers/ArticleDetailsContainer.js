import React from 'react';
import { connect } from 'react-redux';
import ArticleDetails from '../components/ArticleDetails';
import { fetchArticleDetails, fetchArticleDecision } from '../actions';

const ArticleDetailsContainer = props => (
  <ArticleDetails {...props} />
);

const mapStateToProps = ({ articleDetails }) => {
  const {
    plantName,
    articleContents,
    createdAt,
    currentRating,
  } = articleDetails.article;

  const articleDecision = articleDetails.articleDecision;

  return { plantName, articleContents, createdAt, currentRating, articleDecision };
};

const mapDispatchToProps = { fetchArticleDetails, fetchArticleDecision };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailsContainer);
