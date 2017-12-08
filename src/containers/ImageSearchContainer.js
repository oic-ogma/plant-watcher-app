import React from 'react';
import { connect } from 'react-redux';
import ImageSearch from '../components/ImageSearch';
import {
  checkCameraPermissions,
  imageSearch,
  resetState
} from '../actions';

const ImageSearchContainer = props => (
  <ImageSearch {...props} />
);

const mapStateToProps = ({ imageSearch }) => {
  const { hasCameraPermission, loading, error } = imageSearch;
  return { hasCameraPermission, loading, error };
};

const mapDispatchToProps = { checkCameraPermissions, imageSearch, resetState };

export default connect (mapStateToProps, mapDispatchToProps)(ImageSearchContainer);
