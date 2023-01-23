import React from 'react';
import { DrawToolBarProps } from './DrawToolBarProps';
import styles from './DrawToolBarStyles';
import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
import { NColorPicker } from '../../ColorPicker';
import { MenuItem } from './MenuItem';
import { NSlider } from '../../Slider';
export const DrawToolBar = ({
  redo,
  undo,
  reset,
  setStrokeWidth,
  pickColor,
  strokeWidth,
  color,
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
        <MenuItem icon="select-color">
          <NColorPicker value={color} pickColor={pickColor} />
        </MenuItem>
        <MenuItem icon="brush">
          <NSlider value={strokeWidth} setStrokeWidth={setStrokeWidth} />
        </MenuItem>
        <Appbar.Action icon="redo" onPress={() => redo()} />
        <Appbar.Action icon="undo" onPress={() => undo()} />
        <Appbar.Action icon="delete-circle" onPress={() => reset()} />
      </View>
    </Appbar>
  );
};
