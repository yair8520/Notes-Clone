import { FlatList, View } from 'react-native';
import React from 'react';
import { CategoryListProps } from './CategoryListProps';
import styles from './CategoryListStyles';

import { CategoryListItem } from './CategoryListItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { NText } from '../Text';
import { useModal } from 'react-native-modalfy';

export const CategoryList = ({ data, navigation }: CategoryListProps) => {
  const { openModal } = useModal();

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
  const onAdd = () => {
    openModal('InfoModal');
  };
  return (
    <>
      <View style={styles.title}>
        <NText variant="H2">Notes categories</NText>
        <TouchableOpacity onPress={onAdd}>
          <List.Icon icon={'plus-circle'} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data}
        renderItem={renderItems}
      />
    </>
  );
};
