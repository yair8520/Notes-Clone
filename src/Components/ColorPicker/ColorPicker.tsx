import React from 'react';
import { ColorPickerProps } from './ColorPickerProps';
import styles from './ColorPickerStyles';
import ColorPicker, { Panel1 } from 'reanimated-color-picker';
export const NColorPicker = ({ pickColor, value }: ColorPickerProps) => {
  return (
    <ColorPicker
      value={value}
      sliderThickness={25}
      thumbSize={30}
      style={styles.container}
      onComplete={({ hex }) => pickColor(hex)}
    >
      <Panel1 style={styles.panel} />
    </ColorPicker>
  );
};
