import React from 'react';
import { ToolBarProps } from './ToolBarProps';
import styles from './ToolBarStyles';
import { List } from 'react-native-paper';
import { RichToolbar } from 'react-native-pell-rich-editor';
import { onPressAddImage, actionList } from '../helper';
import { useAppSelector } from '../../../Redux';
import { getTheme } from '../../../Features/General/GeneralSelectors';

export const ToolBar = ({ richTextRef }: ToolBarProps) => {
  const isDark = useAppSelector(getTheme);
  return (
    <RichToolbar
      editor={richTextRef}
      onPressAddImage={() => onPressAddImage(richTextRef)}
      style={[styles.toolbar, { backgroundColor: isDark ? 'black' : 'white' }]}
      selectedButtonStyle={styles.selectedButton}
      iconMap={{
        keyboard: () => <List.Icon icon={'keyboard'} />,
        undo: () => <List.Icon icon={'undo'} />,
        redo: () => <List.Icon icon={'redo'} />,
        underline: () => <List.Icon icon={'format-underline'} />,
        italic: () => <List.Icon icon={'format-italic'} />,
        setBold: () => <List.Icon icon={'format-bold'} />,
        orderedList: () => <List.Icon icon={'format-list-numbered'} />,
        unorderedList: () => <List.Icon icon={'format-list-group'} />,
        image: () => <List.Icon icon={'file-image-plus'} />,
      }}
      actions={actionList}
    />
  );
};
