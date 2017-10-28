import React from 'react';
import { Text } from 'react-native';

export const Error = ({ message }) => (
  <Text style={styles.errorTextStyle}>
    {message}
  </Text>
);

const styles = {
  errorTextStyle: {
    paddingTop: 5,
    fontSize: 18,
    alignSelf: 'center',
    color: '#FF0000',
  }
};
