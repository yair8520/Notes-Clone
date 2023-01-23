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

  return (
    <Appbar.Header>
      <Appbar.Action
        icon="content-save"
        onPress={() => addNote(categories[selectedIndex].title)}
      />
      <NDropDown
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        data={categories}
      />
      <Appbar.Content style={styles.title} title={title} />
      <Appbar.Action icon="arrow-left" onPress={() => navigation.goBack()} />
    </Appbar.Header>
  );
};
