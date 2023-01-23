import { View } from 'react-native';
import React from 'react';
import { MultiLineInputProps } from './MultiLineInputProps';
import styles from './MultiLineInputStyles';
import { TextInput } from 'react-native-paper';
export const MultiLineInput = ({
  onChange,
  value,
  style,
  ...rest
}: MultiLineInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        style={[styles.input, style]}
        outlineStyle={styles.outline}
        underlineStyle={styles.underline}
        multiline={true}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};
