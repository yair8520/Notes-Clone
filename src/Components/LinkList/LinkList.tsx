import { View } from 'react-native';
import React from 'react';
import { LinkListProps } from './LinkListProps';
import styles from './LinkListStyles';
import { EmptyList } from '../EmptyList';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { getLinks } from '../../Features/Links/LinksSelectors';
import { ScrollView } from 'react-native-gesture-handler';
import { LinkListItem } from './LinkListItem';
import { removeLink } from '../../Features/Links/LinkSlice';
import { useLinksFilter } from '../../Hooks/useLinksFilter';
export const LinkList = ({
  deleteMode,
  filterDir,
  searchQuery,
}: LinkListProps) => {
  let links = useAppSelector(getLinks);
  const dispatch = useAppDispatch();
  const deleteLink = (index: number) => {
    dispatch(removeLink({ index }));
  };
  links = useLinksFilter({ filterDir, links, searchQuery });
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.list}>
        {links.length !== 0 ? (
          links.map((item, index) => {
            return (
              <LinkListItem
                deleteLink={deleteLink}
                startAnimation={deleteMode}
                data={item}
                index={index}
                key={item.title + index}
              />
            );
          })
        ) : (
          <View style={styles.empty}>
            <EmptyList type="link" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
