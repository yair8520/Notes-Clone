import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import LinksIcons from '../Assets/Images/LinksIcons';
import NotesIcon from '../Assets/Images/NotesIcon';
import { NText } from '../Components';
import styles from './TabBarItemStyles';
export const TabBarItem = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={{ flex: 1 }}
          >
            <View style={[styles.labelContainer]}>
              {route.name !== 'Notes' ? (
                <LinksIcons fill={isFocused ? '#1d9df3' : 'black'} />
              ) : (
                <NotesIcon
                  fill={isFocused ? styles.focusedTab.color : 'black'}
                />
              )}
              <NText style={isFocused && styles.focusedTab} bold variant="H3">
                {label}
              </NText>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
