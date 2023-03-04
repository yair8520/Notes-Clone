import { Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ShakeViewProps } from './ShakeViewProps';
import styles from './ShakeViewStyles';

export const ShakeView = ({ error, children }: ShakeViewProps) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (error) {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 10,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: -10,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 10,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 80,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [error, animation]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: animation }] }]}
    >
      {children}
    </Animated.View>
  );
};
