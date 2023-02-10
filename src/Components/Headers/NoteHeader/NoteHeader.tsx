import React from 'react';
import { HeaderProps } from './NoteHeaderProps';
import { Appbar } from 'react-native-paper';
import styles from './NoteHeaderStyles';
import { NDropDown } from '../../DropDown';
import { getCategories } from '../../../Features/Notes/NotesSelectors';
import { useAppSelector } from '../../../Redux';

export const NoteHeader = ({
  navigation,
  addNote,
  setSelectedIndex,
  selectedIndex,
}: HeaderProps) => {
  const categories = useAppSelector(getCategories);
  console.log(categories[selectedIndex].title);
  const save = () => {
    addNote();
    navigation.navigate(categories[selectedIndex].title);
  };
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action icon="content-save" onPress={save} />
      <NDropDown
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        data={categories}
      />
      <Appbar.Content style={styles.title} title={''} />
      <Appbar.Action
        icon="arrow-right"
        onPress={() => navigation.navigate(categories[selectedIndex].title)}
      />
    </Appbar.Header>
  );
};
