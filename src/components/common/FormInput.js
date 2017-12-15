import React from 'react';
import { FormInput } from 'react-native-elements';
import { Platform, StyleSheet } from 'react-native';

export const FormInputComponent = ({ placeholder, multiline, onChangeText, value, secureTextEntry }) => {
  const { input, multilineInput } = styles;
  if (multiline) {
    return (
      <FormInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        multiline={true}
        blurOnSubmit={false}
        maxHeight={150}
        inputStyle={multilineInput}
        autoGrow={true}
        value={value}
      />
    );
  }
  return (
    <FormInput
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      inputStyle={input}
    />
  );
};

const styles = StyleSheet.create({
  multilineInput: {
    fontSize: 18,
    ...Platform.select({
      android: {
        textAlignVertical: 'top'
      }
    })
  },
  input: {
    fontSize: 18,
  }
});
