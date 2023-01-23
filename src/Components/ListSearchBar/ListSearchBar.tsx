import React from 'react';
import { ListSearchBarProps } from './ListSearchBarProps';
import styles from './ListSearchBarStyles';
import { TextInput } from 'react-native-paper';
export const ListSearchBar = ({
  onChangeSearch,
  searchQuery,
}: ListSearchBarProps) => {
  return (
    <TextInput
      style={styles.container}
      label="Search"
      mode="outlined"
      outlineStyle={styles.outline}
      left={<TextInput.Icon icon="clipboard-text-search" />}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
