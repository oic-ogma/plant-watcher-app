import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const Spinner = ({ size, color }) => (
  <View style={styles.spinnerStyle} >
    <ActivityIndicator size={size || 'large'} color={color}/>
  </View>
);

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
