import React from 'react';
import { HeaderProps } from './NoteHeaderProps';
import { Appbar, List } from 'react-native-paper';
import styles from './NoteHeaderStyles';
import { NDropDown } from '../../DropDown';
import { getCategories } from '../../../Features/Notes/NotesSelectors';
import { useAppDispatch, useAppSelector } from '../../../Redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { lockNote } from '../../../Features/Notes/NotesSlice';
import { addMessage } from '../../../Features/Links/LinkSlice';

export const NoteHeader = ({
  navigation,
  addNote,
  setSelectedIndex,
  selectedIndex,
  id,
  locked,
}: HeaderProps) => {
  console.log(locked);
  const categories = useAppSelector(getCategories);
  const dispatch = useAppDispatch();
  const save = () => {
    addNote();
    navigation.navigate(categories[selectedIndex].title);
  };
  const LockOption = () => {
    addNote();
    dispatch(lockNote({ noteId: id }));
    if (locked) {
      dispatch(addMessage({ msg: 'The note is open' }));
    } else {
      dispatch(addMessage({ msg: 'The note is locked' }));
    }
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

      <TouchableOpacity onPress={LockOption}>
        <List.Icon
          icon={!locked ? 'shield-lock-open-outline' : 'shield-lock-outline'}
        />
      </TouchableOpacity>
      <Appbar.Action
        icon="arrow-right"
        onPress={() => navigation.navigate(categories[selectedIndex].title)}
      />
    </Appbar.Header>
  );
};
