import { View } from 'react-native';
import React from 'react';
import { LayoutProps } from './LayoutProps';
import styles from './LayoutStyles';
import { useAppSelector } from '../../Redux';
import { getTheme } from '../../Features/General/GeneralSelectors';
export const Layout = ({
  children,
  style,
  colors = { dark: '#36454f', light: 'white' },
}: LayoutProps) => {
  const isDark = useAppSelector(getTheme);
  return (
    <View
      style={[
        styles.container,
        style,
        { backgroundColor: !isDark ? colors.light : colors.dark },
      ]}
    >
      {children}
    </View>
  );
};
