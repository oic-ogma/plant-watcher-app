import React from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';

export const HideKeyboardOnPress = ({ children }) => (
  <TouchableOpacity onPress={Keyboard.dismiss} style={{ flex: 1 }}>
    {children}
  </TouchableOpacity>
);
