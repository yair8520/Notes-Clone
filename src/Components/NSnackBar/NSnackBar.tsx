import React from 'react';
import { Linking } from 'react-native';
import { NSnackBarProps } from './NSnackBarProps';
import styles from './NSnackBarStyles';
import { Snackbar } from 'react-native-paper';
import { errorMsg } from '../../I18n/HebrewTranslations';
import { addMessage } from '../../Features/Links/LinkSlice';
import { useAppDispatch } from '../../Redux';
export const NSnackBar = ({ message, visible }: NSnackBarProps) => {
  const dispatch = useAppDispatch();
  const action =
    message === errorMsg.permissions
      ? {
          label: 'Settings',
          onPress: () => {
            Linking.openSettings();
          },
        }
      : undefined;
  return (
    <Snackbar
      action={action}
      style={styles.container}
      visible={visible}
      duration={3000}
      onDismiss={() => {
        dispatch(addMessage({ msg: '' }));
      }}
    >
      {message}
    </Snackbar>
  );
};
