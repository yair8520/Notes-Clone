/* eslint-disable react-hooks/exhaustive-deps */
import { Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { JiggleViewProps } from './JiggleViewProps';
import styles from './JiggleViewStyles';
import { Easing } from 'react-native-reanimated';
export const JiggleView = ({ children, startAnimation }: JiggleViewProps) => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const resetAnimation = () => {
    shakeAnimation.stopAnimation();
    shakeAnimation.setValue(0);
  };
  useEffect(() => {
    if (startAnimation) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shakeAnimation, {
            toValue: 0.2,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnimation, {
            toValue: -0.2,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnimation, {
            toValue: 0.0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      resetAnimation();
    }
  }, [shakeAnimation, startAnimation]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              rotate: shakeAnimation.interpolate({
                inputRange: [-1, 1],
                outputRange: ['-0.1rad', '0.1rad'],
              }),
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};
