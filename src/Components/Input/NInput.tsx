import React from 'react';
import { NInputProps } from './NInputProps';
import styles from './NInputStyles';
import { HelperText, TextInput } from 'react-native-paper';
export const NInput = ({ onChange, value, style, ...rest }: NInputProps) => {
  return (
    <>
      <TextInput
        {...rest}
        style={[styles.input, style]}
        label="Search"
        mode="outlined"
        error={true}
        outlineStyle={styles.outline}
        onChangeText={onChange}
        value={value}
      />
      <HelperText type="error" visible={false}>
        Email address is invalid!
      </HelperText>
    </>
  );
};
