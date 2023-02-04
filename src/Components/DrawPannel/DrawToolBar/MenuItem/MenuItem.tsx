import React from 'react';
import { MenuItemProps } from './MenuItemProps';
import styles from './MenuItemStyles';
import { Appbar, Menu } from 'react-native-paper';
export const MenuItem = ({ icon, children }: MenuItemProps) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      statusBarHeight={-50}
      anchorPosition={'top'}
      contentStyle={styles.menu}
      anchor={
        <Appbar.Action icon={icon} onPress={() => setVisible(!visible)} />
      }
    >
      {children}
    </Menu>
  );
};
