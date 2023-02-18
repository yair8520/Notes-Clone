/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import React, { useRef } from 'react';
import { MicrophoneProps } from './MicrophoneProps';
import { Animated } from 'react-native';
import { List } from 'react-native-paper';
import styles from './MicrophoneStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
export const Microphone = ({
  onStopRecord,
  onStartRecord,
  isRecording,
}: MicrophoneProps) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const scaleIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(scaleOut);
  };

  const scaleOut = () => {
    Animated.timing(scaleValue, {
      toValue: 2.5,
      duration: 800,
      useNativeDriver: true,
    }).start(scaleIn);
  };

  const onPressHandler = () => {
    if (isRecording) {
      scaleValue.stopAnimation();
      onStopRecord();
    } else {
      scaleIn();
      onStartRecord();
    }
  };
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[styles.container, { borderColor: isRecording ? 'red' : 'black' }]}
    >
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <List.Icon
          color={isRecording ? 'red' : undefined}
          icon={'microphone'}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};
