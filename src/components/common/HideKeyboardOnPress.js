import React from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';

export const HideKeyboardOnPress = ({ children, style }) => (
  <TouchableOpacity
    onPress={Keyboard.dismiss}
    style={style ? style : { flex: 1 }}
    activeOpacity={1}
  >
    {children}
  </TouchableOpacity>
);
