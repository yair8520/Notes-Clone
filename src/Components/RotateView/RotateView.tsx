import { Animated } from 'react-native';
import React, { useRef, useCallback } from 'react';
import { RotateViewProps } from './RotateViewProps';
import styles from './RotateViewStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const RotateView = ({ children, onPress }: RotateViewProps) => {
  const rotateAnimation = useRef(new Animated.Value(0));
  const onPressHandler = useCallback(() => {
    Animated.timing(rotateAnimation.current, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.current.setValue(0);
    });
    onPress?.();
  }, [onPress]);
  const interpolateRotating = rotateAnimation.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ rotate: interpolateRotating }] },
      ]}
    >
      <TouchableOpacity onPress={onPressHandler}>{children}</TouchableOpacity>
    </Animated.View>
  );
};
