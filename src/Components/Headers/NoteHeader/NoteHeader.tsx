import React from 'react';
import { HeaderProps } from './NoteHeaderProps';
import { Appbar } from 'react-native-paper';
import styles from './NoteHeaderStyles';
import { NDropDown } from '../../DropDown';
import { getCategories } from '../../../Features/Notes/NotesSelectors';
import { useAppSelector } from '../../../Redux';

export const NoteHeader = ({ navigation, route, addNote }: HeaderProps) => {
  const { title } = route?.params ?? '';
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const categories = useAppSelector(getCategories);
  const save = () => {
    addNote(categories[selectedIndex].title);
    navigation.goBack();
  };
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action icon="content-save" onPress={save} />
      <NDropDown
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        data={categories}
      />
      <Appbar.Content style={styles.title} title={title} />
      <Appbar.Action icon="arrow-right" onPress={() => navigation.goBack()} />
    </Appbar.Header>
  );
};
