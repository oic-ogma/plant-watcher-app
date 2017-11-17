import React from 'react';
import { SearchBar } from 'react-native-elements';

export const SearchBarComponent = ({ placeholder, onChangeText, onSubmitEditing, value }) => {
  const { container, input, icon, clearIcon } = styles;
  return (
    <SearchBar
      onChangeText={onChangeText}
      lightTheme
      round
      containerStyle={container}
      inputStyle={input}
      icon={{ style: icon }}
      placeholder={placeholder}
      clearIcon={value ? { style: clearIcon } : null}
      onSubmitEditing={onSubmitEditing}
      value={value}
    />
  );
};

const styles = {
  container: {
    backgroundColor: '#FFF',
    borderBottomColor: '#FFF',
    borderTopColor: '#FFF'
  },
  input: {
    fontSize: 20,
    height: 50,
    paddingLeft: 45
  },
  icon: {
    top: 17.5,
    width: 30,
    fontSize: 30
  },
  clearIcon: {
    top: 17.5,
    width: 30,
    fontSize: 30
  }
};
