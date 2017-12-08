import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Camera } from 'expo';
import { Icon } from 'react-native-elements';
import { Spinner, Error } from './common';
import { Button } from 'react-native-elements';

export default class ImageSearch extends Component {
  componentWillMount() {
    this.props.checkCameraPermissions();
  }

  async takePicture() {
    const photo = await this.camera.takePictureAsync({ base64: true, quality: 1 });
    this.props.imageSearch(photo);
  }

  showModal(error) {
    const { resetState } = this.props;
    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={error != null}
        onRequestClose={resetState}
      >
        <View style={styles.popup}>
          <Error message={error}/>
          <Button title='OK' onPress={resetState}/>
        </View>
      </Modal>
    );
  }

  render() {
    const { hasCameraPermission, loading, error } = this.props;
    if (hasCameraPermission === null) {
      return <Spinner size='large'/>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            ref={ref => this.camera = ref}
          >
            {loading && <Spinner size='large' color='white'/>}

            {error && this.showModal(error)}

            <Icon
              raised
              size={35}
              name={!loading ? 'camera-alt' : 'hourglass-full'}
              color={!loading ? 'green' : 'red'}
              backgroundColor={'white'}
              onPress={!loading ? this.takePicture.bind(this) : null}
            />
          </Camera>
        </View>
      );
    }
  }
}

const styles = {
  popup: {
    marginTop:300,
    height:100,
    backgroundColor:'white'
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
};
