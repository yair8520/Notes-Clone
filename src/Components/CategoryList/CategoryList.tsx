import { FlatList } from 'react-native';
import React from 'react';
import { CategoryListProps } from './CategoryListProps';
import styles from './CategoryListStyles';

import { CategoryListItem } from './CategoryListItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CategoryList = ({ data, navigation }: CategoryListProps) => {
  const renderItems = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate(item.title);
        }}
      >
        <CategoryListItem item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={data}
      renderItem={renderItems}
    />
  );
};
