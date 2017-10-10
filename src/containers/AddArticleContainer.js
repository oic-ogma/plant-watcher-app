import React from 'react';
import { connect } from 'react-redux';
import { plantNameChanged, articleContentsChanged, saveArticle } from '../actions';
import AddArticle from '../components/AddArticle';

const AddArticleContainer = props => (
  <AddArticle {...props} />
);

const mapStateToProps = ({ addArticle }) => {
  const { plantName, articleContents, error, loading } = addArticle;
  return { plantName, articleContents, error, loading };
};

const mapDispatchToProps = { plantNameChanged, articleContentsChanged, saveArticle };

export default connect(mapStateToProps, mapDispatchToProps)(AddArticleContainer);
