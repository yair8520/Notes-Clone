import React from 'react';
import { NSliderProps } from './NSliderProps';
import styles from './NSliderStyles';
import Slider from '@react-native-community/slider';
export const NSlider = ({ setStrokeWidth, value }: NSliderProps) => {
  return (
    <Slider
      style={styles.slider}
      value={value}
      minimumValue={8}
      maximumValue={25}
      step={1}
      onValueChange={(a) => setStrokeWidth(Math.floor(a))}
    />
  );
};
