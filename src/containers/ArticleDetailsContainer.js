import React from 'react';
import { connect } from 'react-redux';
import ArticleDetails from '../components/ArticleDetails';
import { setArticleDetails, addBookmark, removeBookmark } from '../actions';

const ArticleDetailsContainer = props => (
  <ArticleDetails {...props} />
);

const mapStateToProps = ({ articleDetails }) => {
  const { article, editable, bookmarked, bookmarkProcessing, loggedIn } = articleDetails;

  const {
    plantName,
    articleContents,
    createdAt,
    currentRating,
    image,
    key
  } = article;

  return {
    plantName,
    articleContents,
    createdAt,
    currentRating,
    image,
    articleId: key,
    editable,
    bookmarked,
    bookmarkProcessing,
    loggedIn
  };
};

const mapDispatchToProps = { setArticleDetails, addBookmark, removeBookmark };

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailsContainer);
