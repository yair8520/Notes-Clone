import React from 'react';
import { DrawToolBarProps } from './DrawToolBarProps';
import styles from './DrawToolBarStyles';
import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
export const DrawToolBar = ({
  redo,
  undo,
  reset,
  setBrush,
  pickColor,
}: DrawToolBarProps) => {
  const BOTTOM_APPBAR_HEIGHT = 50;
  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT,
        },
      ]}
    >
      <View style={styles.buttons}>
        <Appbar.Action icon="select-color" onPress={() => pickColor('red')} />
        <Appbar.Action icon="brush" onPress={() => setBrush(8)} />
        <Appbar.Action icon="redo" onPress={() => redo()} />
        <Appbar.Action icon="undo" onPress={() => undo()} />
        <Appbar.Action icon="delete-circle" onPress={() => reset()} />
      </View>
    </Appbar>
  );
};
