import { View, Text } from 'react-native';
import React from 'react';
import { DrawPannelProps } from './DrawPannelProps';
import styles from './DrawPannelStyles';
export const DrawPannel = ({}: DrawPannelProps) => {
  return (
    <View style={styles.container}>
      <Text>DrawPannel page</Text>
    </View>
  );
};
