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
import { ILink } from '../../Features/Links/LinksTypes';
export const LinkList = ({
  deleteMode,
  filterDir,
  searchQuery,
  handleScroll,
  scrollOffset,
}: LinkListProps) => {
  let links = useAppSelector(getLinks);
  const dispatch = useAppDispatch();
  const deleteLink = (id: string) => {
    dispatch(removeLink({ id }));
  };
  links = useLinksFilter({ filterDir, links, searchQuery });

  return (
    <ScrollView
      onScroll={handleScroll}
      ref={scrollOffset}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      <View style={styles.list}>
        {links.length !== 0 ? (
          links.map((item: [string, ILink], index: any) => {
            return (
              <LinkListItem
                deleteLink={deleteLink}
                startAnimation={deleteMode}
                data={item[1]}
                key={item[1].title + index}
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
