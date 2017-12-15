import React from 'react';
import  { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { View } from 'react-native';

export const AuthButtonGroup = () => {
  const { buttonStyle, button } = styles;
  return (
    <View style={buttonStyle}>
      <Button large buttonStyle={button} onPress={Actions.articleSearch} title='ログイン' />
      <Button onPress={Actions.articleSearch} title='ユーザー登録' />
    </View>
  );
};

const styles = {
  buttonStyle: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingLeft: '20%'
  },
  button: {
    marginTop: 100,
  }
};
