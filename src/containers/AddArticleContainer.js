import React from 'react';
import { connect } from 'react-redux';
import {
  plantNameChanged,
  articleContentsChanged,
  saveArticle,
  startAsAddArticle,
  savePhoto
} from '../actions';
import AddArticle from '../components/AddArticle';

const AddArticleContainer = props => (
  <AddArticle {...props} />
);

const mapStateToProps = ({ addArticle }) => {
  const { plantName, articleContents, error, loading, photo } = addArticle;
  return { plantName, articleContents, error, loading, photo };
};
const mapDispatchToProps = {
  plantNameChanged,
  articleContentsChanged,
  saveArticle,
  startAsAddArticle,
  savePhoto
};

export default connect(mapStateToProps, mapDispatchToProps)(AddArticleContainer);
