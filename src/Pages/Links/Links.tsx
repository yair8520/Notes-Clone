import { View } from 'react-native';
import React from 'react';
import { LinksProps } from './LinksProps';
import styles from './LinksStyles';
import { ListSearchBar } from '../../Components';
import { AppHeader } from '../../Components/Headers/AppHeader';
import { useRoute } from '@react-navigation/native';
import { FAB } from 'react-native-paper';
import { useModal } from 'react-native-modalfy';
import { useAppDispatch } from '../../Redux';
import { LinkList } from '../../Components/LinkList';
import { addLink } from '../../Features/Links/LinkSlice';
import { Layout } from '../../Components/Layout';
import { uid } from 'uid';
export const Links = ({ navigation }: LinksProps) => {
  const type = useRoute().name;
  const dispatch = useAppDispatch();
  const { openModal } = useModal();
  const [deleteMode, setDeleteMode] = React.useState<boolean>(false);
  const [filterDir, setFilterDir] = React.useState<string>('Descending');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  const onFabPress = () => {
    const insert = (title: string, value: string) => {
      dispatch(addLink({ title, value, id: uid(16) }));
    };
    openModal('LinkModal', { insert });
  };
  return (
    <Layout>
      <AppHeader
        editMode={setDeleteMode}
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
        <LinkList
          searchQuery={searchQuery}
          deleteMode={deleteMode}
          filterDir={filterDir}
        />
      </View>

      <FAB
        icon="plus"
        color={'white'}
        style={styles.fab}
        onPress={onFabPress}
      />
    </Layout>
  );
};
