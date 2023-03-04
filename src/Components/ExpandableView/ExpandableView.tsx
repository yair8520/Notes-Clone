import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { ExpandableViewProps } from './ExpandableViewProps';
import { styles } from './ExpandableViewStyles';

export const ExpandableView = ({
  children,
  expanded,
  toHeight = 350,
}: ExpandableViewProps) => {
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(height, {
      toValue: expanded ? 0 : toHeight,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [expanded, height, toHeight]);

  return (
    <Animated.View style={styles({ height }).container}>
      {children}
    </Animated.View>
  );
};
