import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Error = ({ message }) => (
  <Text style={styles.errorTextStyle}>
    {message}
  </Text>
);

const styles = StyleSheet.create({
  errorTextStyle: {
    paddingTop: 5,
    fontSize: 18,
    alignSelf: 'center',
    color: '#FF0000',
  }
});
