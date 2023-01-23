import React from 'react';
import { DrawToolBarProps } from './DrawToolBarProps';
import styles from './DrawToolBarStyles';
import { Appbar } from 'react-native-paper';
import { ExpandableView } from '../../ExpandableView';
export const DrawToolBar = ({ visible = true }: DrawToolBarProps) => {
  const BOTTOM_APPBAR_HEIGHT = 50;
  return (
    <ExpandableView expanded={!visible} toHeight={BOTTOM_APPBAR_HEIGHT}>
      <Appbar
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT,
          },
        ]}
      >
        <Appbar.Action icon="archive" onPress={() => {}} />
        <Appbar.Action icon="email" onPress={() => {}} />
        <Appbar.Action icon="label" onPress={() => {}} />
        <Appbar.Action icon="delete" onPress={() => {}} />
      </Appbar>
    </ExpandableView>
  );
};
