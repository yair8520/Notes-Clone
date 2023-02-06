import React from 'react';
import { NInputProps } from './NInputProps';
import styles from './NInputStyles';
import { HelperText, TextInput } from 'react-native-paper';
export const NInput = ({
  onChange,
  value,
  style,
  errorText,
  error,
  ...rest
}: NInputProps) => {
  return (
    <>
      <TextInput
        {...rest}
        error={error}
        style={[styles.input, style]}
        mode="outlined"
        outlineColor="#2fa7f8"
        cursorColor="#2fa7f8"
        activeOutlineColor="#2fa7f8"
        placeholderTextColor="#2fa7f8"
        outlineStyle={styles.outline}
        onChangeText={onChange}
        value={value}
      />
      <HelperText type="error" style={styles.errText} visible={error}>
        {errorText}
      </HelperText>
    </>
  );
};
