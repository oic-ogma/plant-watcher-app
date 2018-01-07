import React from 'react';
import { connect } from 'react-redux';
import ArticleDetails from '../components/ArticleDetails';
import { setArticleDetails } from '../actions';

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
    image
  } = article;

  return { plantName, articleContents, createdAt, currentRating, image, editable };
};

const mapDispatchToProps = { setArticleDetails };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailsContainer);
