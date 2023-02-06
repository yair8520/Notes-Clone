import React from 'react';
import { ToolBarProps } from './ToolBarProps';
import styles from './ToolBarStyles';
import { List } from 'react-native-paper';
import { RichToolbar } from 'react-native-pell-rich-editor';
import { onPressAddImage, actionList } from '../helper';
import { useModal } from 'react-native-modalfy';
export const ToolBar = ({ richTextRef }: ToolBarProps) => {
  const { openModal } = useModal();

  const onInsertLink = () => {
    richTextRef.current?.dismissKeyboard();
    const insert = (title: string, value: string) => {
      richTextRef.current?.insertLink(title || value, value);
    };
    openModal('LinkModal', { insert });
  };
  return (
    <RichToolbar
      editor={richTextRef}
      onPressAddImage={() => onPressAddImage(richTextRef)}
      onInsertLink={onInsertLink}
      style={styles.toolbar}
      selectedButtonStyle={styles.selectedButton}
      iconMap={{
        keyboard: () => <List.Icon icon={'keyboard'} />,
        undo: () => <List.Icon icon={'undo'} />,
        redo: () => <List.Icon icon={'redo'} />,
        underline: () => <List.Icon icon={'format-underline'} />,
        italic: () => <List.Icon icon={'format-italic'} />,
        link: () => <List.Icon icon={'link'} />,
        checkboxList: () => <List.Icon icon={'format-list-checkbox'} />,
        orderedList: () => <List.Icon icon={'format-list-numbered'} />,
        unorderedList: () => <List.Icon icon={'format-list-group'} />,
        image: () => <List.Icon icon={'file-image-plus'} />,
      }}
      actions={actionList}
    />
  );
};
