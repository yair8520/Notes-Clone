/* eslint-disable curly */
import { Animated } from 'react-native';
import React, { useRef, useCallback, useEffect } from 'react';
import { RotateViewProps } from './RotateViewProps';
import styles from './RotateViewStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const RotateView = ({
  children,
  onPress,
  deps = null,
}: RotateViewProps) => {
  const rotateAnimation = useRef(new Animated.Value(0));
  const runAnimation = () => {
    Animated.timing(rotateAnimation.current, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.current.setValue(0);
    });
  };
  const onPressHandler = useCallback(() => {
    runAnimation();
    onPress?.();
  }, [onPress]);
  const interpolateRotating = rotateAnimation.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  useEffect(() => {
    if (!onPress) runAnimation();
  }, [onPress, deps]);
  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ rotate: interpolateRotating }] },
      ]}
    >
      <TouchableOpacity disabled={!onPress} onPress={onPressHandler}>
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
};
