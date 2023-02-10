import React from 'react';
import { NSnackBarProps } from './NSnackBarProps';
import styles from './NSnackBarStyles';
import { Snackbar } from 'react-native-paper';
export const NSnackBar = ({ message, visible }: NSnackBarProps) => {
  return (
    <Snackbar style={styles.container} visible={visible} onDismiss={() => {}}>
      {message}
    </Snackbar>
  );
};
