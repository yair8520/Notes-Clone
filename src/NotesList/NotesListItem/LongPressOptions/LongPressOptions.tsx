import { View } from 'react-native';
import React from 'react';
import { LongPressOptionsProps } from './LongPressOptionsProps';
import styles from './LongPressOptionsStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Menu } from 'react-native-paper';
export const LongPressOptions = ({
  children,
  style,
  disabled,
  onPress,
}: LongPressOptionsProps) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(!true);
  return (
    <View style={[styles.container, style]}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        statusBarHeight={40}
        anchor={
          <TouchableOpacity
            disabled={disabled}
            onLongPress={() => openMenu()}
            onPress={onPress}
          >
            {children}
          </TouchableOpacity>
        }
      >
        <Menu.Item onPress={() => {}} leadingIcon="share" title={'share'} />
      </Menu>
    </View>
  );
};
