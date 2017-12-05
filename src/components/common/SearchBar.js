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
    backgroundColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    borderTopColor: 'rgba(0,0,0,0)',
  },
  input: {
    fontSize: 20,
    height: 50,
    paddingLeft: '10%',
    marginLeft: '10%',
    marginRight: '10%'
  },
  icon: {
    top: 17.5,
    width: 30,
    marginLeft: '8%',
    fontSize: 30
  },
  clearIcon: {
    marginRight: '3%',
    top: 17.5,
    width: 30,
    fontSize: 30
  }
};
