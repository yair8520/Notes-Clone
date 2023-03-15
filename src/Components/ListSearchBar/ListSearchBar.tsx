import React from 'react';
import { Animated } from 'react-native';
import { ListSearchBarProps } from './ListSearchBarProps';
import styles from './ListSearchBarStyles';
import { TextInput } from 'react-native-paper';
export const ListSearchBar = ({
  onChangeSearch,
  searchQuery,
  searchBarHeight,
  searchBarOpacity,
}: ListSearchBarProps) => {
  return (
    <Animated.View style={[styles.input, { height: searchBarHeight }]}>
      <Animated.View style={{ opacity: searchBarOpacity }}>
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
      </Animated.View>
    </Animated.View>
  );
};
