/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { SlideViewProps } from './SlideViewProps';
import styles from './SlideViewStyles';
import { Animated } from 'react-native';
export const SlideView = ({
  children,
  dependency,
  side = 'left',
}: SlideViewProps) => {
  const whichSide = () => (side === 'left' ? 400 : -400);
  const animated = new Animated.Value(whichSide());

  useEffect(() => {
    Animated.spring(animated, {
      toValue: 0,
      friction: 5,
      tension: 10,
      useNativeDriver: true,
    }).start();
  }, [dependency]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: animated }] }]}
    >
      {children}
    </Animated.View>
  );
};
