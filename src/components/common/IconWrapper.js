import React from 'react';
import { Icon } from 'react-native-elements';

export const IconWrapper = ({ name, type, tintColor }) => (
  <Icon
    name={name}
    type={type}
    color={tintColor}
  />
);
