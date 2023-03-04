/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { CalendarHeaderProps } from './CalendarHeaderProps';
import { Appbar } from 'react-native-paper';
import styles from './CalendarHeaderStyles';
import { DarkTheme, DrawerActions } from '@react-navigation/native';
import { useAppSelector } from '../../../Redux';
import { getTheme } from '../../../Features/General/GeneralSelectors';

export const CalendarHeader = ({ navigation, title }: CalendarHeaderProps) => {
  const isDark = useAppSelector(getTheme);

  return (
    <Appbar.Header
      style={[
        styles.header,
        { backgroundColor: !isDark ? 'white' : DarkTheme.colors.card },
      ]}
    >
      <Appbar.Action
        icon="menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Appbar.Content style={styles.title} title={title} />
    </Appbar.Header>
  );
};
