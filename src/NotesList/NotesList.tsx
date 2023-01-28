/* eslint-disable curly */
import { View, ScrollView } from 'react-native';
import React, { useMemo } from 'react';
import { NotesListProps } from './NotesListProps';
import styles from './NotesListStyles';
import { getNotes } from '../Features/Notes/NotesSelectors';
import { useAppSelector } from '../Redux';
import { NotesListItem } from './NotesListItem';
import { NText } from '../Components';
import { t } from 'i18next';

export const NotesList = ({
  type,
  deleteMode,
  searchQuery,
}: NotesListProps) => {
  let notes = useAppSelector(getNotes);

  console.log(searchQuery);
  const notesFiltered = useMemo(() => {
    if (searchQuery) {
      console.log(searchQuery);
      return Object.entries(notes).filter((item) =>
        item[1].headline.includes(searchQuery)
      );
    } else return Object.entries(notes);
  }, [notes, searchQuery]);
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.container}>
        {notesFiltered && notesFiltered.length !== 0 ? (
          notesFiltered.map((item, index) => (
            <NotesListItem
              startAnimation={deleteMode}
              key={`${index}${index}`}
              note={item[1]}
            />
          ))
        ) : (
          <View style={styles.emptyList}>
            <NText variant="H3">{t('emptyList')}</NText>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
