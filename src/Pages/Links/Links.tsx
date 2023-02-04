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
export const Links = ({ navigation }: LinksProps) => {
  const [deleteMode, setDeleteMode] = React.useState<boolean>(false);
  const [filterDir, setFilterDir] = React.useState<string>('Descending');
  const type = useRoute().name;
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  const dispatch = useAppDispatch();
  const { openModal } = useModal();
  const onFabPress = () => {
    const insert = (title: string, value: string) => {
      dispatch(addLink({ title, value }));
    };
    openModal('LinkModal', { insert });
  };
  return (
    <>
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
        <LinkList deleteMode={deleteMode} />
      </View>
      <FAB
        icon="plus"
        color={'white'}
        style={styles.fab}
        onPress={onFabPress}
      />
    </>
  );
};
