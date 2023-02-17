/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { HeaderProps } from './HeaderProps';
import { Appbar, Divider, Menu } from 'react-native-paper';
import styles from './HeaderStyles';
import { DarkTheme, DrawerActions } from '@react-navigation/native';
import { View } from 'react-native';
import { useAppSelector } from '../../../Redux';
import { getTheme } from '../../../Features/General/GeneralSelectors';

export const AppHeader = ({
  navigation,
  title,
  setFilterDir,
  editMode,
}: HeaderProps) => {
  const isDark = useAppSelector(getTheme);
  const filterList = (dir: string) => {
    closeMenu();
    setFilterDir(dir);
  };
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(!true);
  return (
    <Appbar.Header
      style={[
        styles.header,
        { backgroundColor: !isDark ? 'white' : DarkTheme.colors.card },
      ]}
    >
      {title !== 'Links' ? (
        <Appbar.Action
          icon="menu"
          style={{ width: 50 }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      ) : (
        <View style={{ width: 50 }} />
      )}

      <Appbar.Content style={styles.title} title={title} />
      <Appbar.Action
        icon="content-save-edit"
        onPress={() => editMode((p: any) => !p)}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        contentStyle={styles.menu}
        statusBarHeight={40}
        anchor={<Appbar.Action icon="filter-menu" onPress={openMenu} />}
      >
        <Menu.Item
          onPress={() => {
            filterList('Ascending');
          }}
          leadingIcon="sort-ascending"
          title={'Ascending'}
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            filterList('Descending');
          }}
          leadingIcon="sort-descending"
          title="Descending"
        />
      </Menu>
    </Appbar.Header>
  );
};
