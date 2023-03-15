import React from 'react';
import { LinkMenuProps } from './LinkMenuProps';
import styles from './LinkMenuStyles';
import { Menu } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import {
  copyOption,
  openUrl,
  shareOption,
} from '../../../FloatingButton/helpers';
import { useModal } from 'react-native-modalfy';
import { useAppDispatch } from '../../../../Redux';
import {
  addMessage,
  editLink,
  lockLink,
} from '../../../../Features/Links/LinkSlice';
import { useNavigation } from '@react-navigation/native';

export const LinkMenu = ({ children, style, data, id }: LinkMenuProps) => {
  const nav = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const { openModal } = useModal();
  const dispatch = useAppDispatch();
  const onEditLink = () => {
    const insert = (title: string, value: string) => {
      dispatch(editLink({ title, value, id }));
    };
    openModal('LinkModal', { insert, data });
  };
  const onPress = (callback: any) => {
    setVisible(!visible);
    callback();
  };
  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchorPosition={'top'}
      contentStyle={styles.menu}
      anchor={
        <TouchableOpacity style={style} onPress={() => setVisible(!visible)}>
          {children}
        </TouchableOpacity>
      }
    >
      <Menu.Item
        onPress={() => {
          onPress(() => shareOption({ body: data.value, url: data.value }));
        }}
        trailingIcon="share"
        title="Share"
      />
      <Menu.Item
        onPress={() => {
          onPress(() => {
            onEditLink();
          });
        }}
        trailingIcon="application-edit-outline"
        title="Edit"
      />
      <Menu.Item
        onPress={() => {
          onPress(() => {
            dispatch(addMessage({ msg: 'Url copied to Clipboard' }));
            copyOption(data.value);
          });
        }}
        trailingIcon="content-copy"
        title="Copy"
      />
      <Menu.Item
        onPress={() => {
          onPress(() => openUrl(data.value));
        }}
        trailingIcon="open-in-new"
        title="Open"
      />
      <Menu.Item
        onPress={() => {
          onPress(() => {
            nav.navigate('password', {
              handler: () => dispatch(lockLink({ id })),
            });
          });
        }}
        trailingIcon={
          !data.locked ? 'shield-lock-outline' : 'shield-lock-open-outline'
        }
        title={!data.locked ? 'Lock' : 'Unlock'}
      />
    </Menu>
  );
};
