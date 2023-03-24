import React from 'react';
import { CategoryListItemProps } from './CategoryListItemProps';
import styles from './CategoryListItemStyles';
import { NText } from '../../Text';
import { List } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
export const CategoryListItem = ({ item }: CategoryListItemProps) => {
  return (
    <LinearGradient style={styles.container} colors={['#3184fc', '#9dc9ff']}>
      <List.Icon color="white" icon={item.icon} />
      <NText style={styles.text}>{item.title}</NText>
    </LinearGradient>
  );
};
