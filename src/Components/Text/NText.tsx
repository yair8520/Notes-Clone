import { Text } from 'react-native';
import React from 'react';
import { AcTextProps } from './NTextProps';
import styles from './NTextStyles';
export const NText = ({
  children,
  variant: variant = 'H4',
  style,
  bold,
  ...rest
}: AcTextProps) => {
  return (
    <Text
      lineBreakMode="tail"
      allowFontScaling={false}
      style={[
        styles.text,
        styles?.[variant as keyof object],
        style,
        bold && styles.bold,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};
