import { Linking } from 'react-native';
import React from 'react';
import { IconLinkProps } from './IconLinkProps';
import styles from './IconLinkStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
export const IconLink = ({ url, iconName, color }: IconLinkProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL(url)}
    >
      <List.Icon color={color} icon={iconName} />
    </TouchableOpacity>
  );
};
