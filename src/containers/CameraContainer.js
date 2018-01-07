import React from 'react';
import { connect } from 'react-redux';
import Camera from '../components/Camera';
import {
  checkCameraPermissions,
  camera,
  resetState,
  savePhoto,
  imageSearch
} from '../actions';

const CameraContainer = props => (
  <Camera {...props} />
);

const mapStateToProps = ({ camera }) => {
  const { hasCameraPermission, loading, error, searchMode } = camera;
  return { hasCameraPermission, loading, error, searchMode };
};

const mapDispatchToProps = {
  checkCameraPermissions,
  camera,
  resetState,
  savePhoto,
  imageSearch
};

export default connect (mapStateToProps, mapDispatchToProps)(CameraContainer);
