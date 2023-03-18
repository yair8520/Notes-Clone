/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ToDoHeaderProps } from './ToDoHeaderProps';
import { Appbar } from 'react-native-paper';
import styles from './ToDoHeaderStyles';
import { DarkTheme, DrawerActions } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../Redux';
import { getTheme } from '../../../Features/General/GeneralSelectors';
import { addTodoSection } from '../../../Features/ToDo/ToDoSlice';
import { useModal } from 'react-native-modalfy';

export const ToDoHeader = ({
  navigation,
  title,
  setCollapse,
  collapse,
}: ToDoHeaderProps) => {
  const isDark = useAppSelector(getTheme);
  const dispatch = useAppDispatch();
  const { openModal } = useModal();
  const insert = (headline: string) => {
    dispatch(addTodoSection({ headline }));
  };
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
      <Appbar.Action
        icon={!collapse ? 'arrow-collapse-vertical' : 'arrow-expand-vertical'}
        onPress={() => setCollapse?.(!collapse)}
      />
      <Appbar.Action
        icon="pencil-plus"
        onPress={() => openModal('ToDoModal', { insert })}
      />
    </Appbar.Header>
  );
};
