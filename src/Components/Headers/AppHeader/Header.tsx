import React from 'react';
import { HeaderProps } from './HeaderProps';
import { Appbar, Divider, Menu } from 'react-native-paper';
import styles from './HeaderStyles';
import { DrawerActions } from '@react-navigation/native';

export const AppHeader = ({ navigation, title, setFilterDir }: HeaderProps) => {
  const filterList = (dir: string) => {
    closeMenu();
    setFilterDir(dir);
  };
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(!true);
  return (
    <Appbar.Header>
      <Appbar.Action
        icon="menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Appbar.Content style={styles.title} title={title} />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        statusBarHeight={40}
        anchor={<Appbar.Action icon="filter-menu" onPress={openMenu} />}
      >
        <Menu.Item
          onPress={() => {
            filterList('Ascending');
          }}
          title="Ascending"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            filterList('Descending');
          }}
          title="Descending"
        />
      </Menu>
    </Appbar.Header>
  );
};
