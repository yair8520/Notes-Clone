import { Text } from 'react-native';
import React from 'react';
import { AcTextProps } from './NTextProps';
import styles from './NTextStyles';
import { useAppSelector } from '../../Redux';
import { getTheme } from '../../Features/General/GeneralSelectors';
export const NText = ({
  children,
  variant: variant = 'H4',
  style,
  bold,
  ...rest
}: AcTextProps) => {
  const isDark = useAppSelector(getTheme);

  return (
    <Text
      lineBreakMode="tail"
      allowFontScaling={false}
      style={[
        styles.text,
        styles?.[variant as keyof object],
        style,
        bold && styles.bold,
        { color: isDark ? 'white' : 'black' },
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};
