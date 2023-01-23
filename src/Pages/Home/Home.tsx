import { View } from 'react-native';
import React from 'react';
import { HomeProps } from './HomeProps';
import styles from './HomeStyles';
import { ListSearchBar } from '../../Components/ListSearchBar';
import { FAB } from 'react-native-paper';
import { AppHeader } from '../../Components/Headers/AppHeader/Header';
import { NotesList } from '../../NotesList';
import { useRoute } from '@react-navigation/native';
import { uid } from 'uid';
import { useAppDispatch } from '../../Redux';
import { addNote } from '../../Features/Notes/NotesSlice';
import { getCurrentDate, getCurrentTime } from '../../Utils/Time';

export const Home = ({ navigation }: HomeProps) => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [filterDir, setFilterDir] = React.useState<string>('Descending');
  const dispatch = useAppDispatch();
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  const type = useRoute().name;
  const newNote = () => {
    const id = uid(16);
    dispatch(
      addNote({
        id,
        type,
        time: getCurrentTime(),
        date: getCurrentDate(),
        headline: '',
        body: '',
      })
    );
    navigation.navigate('NoteEditorStack', {
      screen: 'NoteEditor',
      params: { noteId: id },
    });
  };
  return (
    <>
      <AppHeader
        title={type}
        setFilterDir={setFilterDir}
        navigation={navigation}
      />
      <View style={styles.container}>
        <View style={styles.input}>
          <ListSearchBar
            onChangeSearch={onChangeSearch}
            searchQuery={searchQuery}
          />
        </View>
        <NotesList type={type} filterDir={filterDir} />
      </View>
      <FAB icon="plus" style={styles.fab} onPress={() => newNote()} />
    </>
  );
};
