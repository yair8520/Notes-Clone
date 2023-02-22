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
import { Layout } from '../../Components/Layout';
import Animated from 'react-native-reanimated';

export const Home = ({ navigation, route }: HomeProps) => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [deleteMode, setDeleteMode] = React.useState<boolean>(false);
  const [filterDir, setFilterDir] = React.useState<string>('Descending');
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  const category = useRoute().name;
  const newNote = () => {
    navigation.navigate('Notes', {
      screen: 'NoteEditorStack',
      params: {
        screen: 'NoteEditor',
        params: { noteId: uid(16), category },
      },
    });
  };
  return (
    <Animated.View style={route.params.style}>
      <Layout>
        <AppHeader
          editMode={setDeleteMode}
          title={category}
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
          <NotesList
            searchQuery={searchQuery}
            deleteMode={deleteMode}
            type={category}
            filterDir={filterDir}
          />
        </View>
        <FAB
          icon="plus"
          color={'white'}
          style={styles.fab}
          onPress={() => newNote()}
        />
      </Layout>
    </Animated.View>
  );
};
