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
      theme={{
        colors: {
          placeholder: 'white',
          text: 'white',
          primary: '#1d9df3',
        },
      }}
      outlineStyle={styles.outline}
      left={<TextInput.Icon icon="magnify" />}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
