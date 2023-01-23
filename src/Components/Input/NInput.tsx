import React from 'react';
import { NInputProps } from './NInputProps';
import styles from './NInputStyles';
import { TextInput } from 'react-native-paper';
export const NInput = ({ onChange, value, style, ...rest }: NInputProps) => {
  return (
    <TextInput
      {...rest}
      style={[styles.input, style]}
      label="Search"
      mode="outlined"
      outlineStyle={styles.outline}
      onChangeText={onChange}
      value={value}
    />
  );
};
