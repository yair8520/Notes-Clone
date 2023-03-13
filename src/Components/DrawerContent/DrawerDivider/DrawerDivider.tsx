import { View } from 'react-native';
import React from 'react';
import { DrawerDividerProps } from './DrawerDividerProps';
import styles from './DrawerDividerStyles';
import { NText } from '../../Text';
import { useAppSelector } from '../../../Redux';
import { getTheme } from '../../../Features/General/GeneralSelectors';
export const DrawerDivider = ({ text }: DrawerDividerProps) => {
  const isDark = useAppSelector(getTheme);
  return (
    <View style={styles().container}>
      <View style={[styles({ isDark }).divider, styles().right]} />
      {text && (
        <View style={styles().text}>
          <NText>{text}</NText>
        </View>
      )}
      <View style={[styles({ isDark }).divider, styles().left]} />
    </View>
  );
};
