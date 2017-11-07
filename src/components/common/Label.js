import React from 'react';
import { FormLabel } from 'react-native-elements';

export const Label = ({ placeholder }) => (
  <FormLabel labelStyle={{ fontSize: 20 }}>
    {placeholder}
  </FormLabel>
);
