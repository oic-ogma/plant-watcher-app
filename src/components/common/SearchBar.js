import React from 'react';
import { SearchBar } from 'react-native-elements';

export const SearchBarComponent = ({ placeholder, onChangeText, onSubmitEditing, value }) => {
  const { container, input, icon } = styles;
  return (
    <SearchBar
      onChangeText={onChangeText}
      lightTheme
      round
      containerStyle={container}
      inputStyle={input}
      icon={{ style: icon }}
      placeholder={placeholder}
      clearIcon={value ? { style: icon } : null}
      onSubmitEditing={onSubmitEditing}
      value={value}
    />
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    borderTopColor: 'rgba(0,0,0,0)',
    flex: 0.8
  },
  input: {
    fontSize: 20,
    height: 50,
    paddingLeft: 45,
    backgroundColor: 'rgb(255,255,255)',
  },
  icon: {
    top: 17.5,
    width: 30,
    fontSize: 30
  }
};
