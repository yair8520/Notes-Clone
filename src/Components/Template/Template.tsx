import { View, Text } from 'react-native';
import React from 'react';
import { TemplateProps } from './TemplateProps';
import styles from './TemplateStyles';
export const Template = ({}: TemplateProps) => {
  return (
    <View style={styles.container}>
      <Text>Template page</Text>
    </View>
  );
};
