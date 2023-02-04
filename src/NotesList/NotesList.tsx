/* eslint-disable curly */
import { View, ScrollView } from 'react-native';
import React, { useMemo } from 'react';
import { NotesListProps } from './NotesListProps';
import styles from './NotesListStyles';
import { getNotes } from '../Features/Notes/NotesSelectors';
import { useAppSelector } from '../Redux';
import { NotesListItem } from './NotesListItem';
import { EmptyList } from '../Components/EmptyList';

export const NotesList = ({
  type,
  deleteMode,
  searchQuery,
}: NotesListProps) => {
  let notes = useAppSelector(getNotes);
  let notesFiltered = useMemo(() => {
    if (searchQuery) {
      return Object.entries(notes).filter(
        (item) => item[1].body.includes(searchQuery) && item[1].type === type
      );
    } else return Object.entries(notes).filter((item) => item[1].type === type);
  }, [notes, searchQuery, type]);

  notesFiltered = Object.entries(notes);

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View>
        {notesFiltered && notesFiltered.length !== 0 ? (
          notesFiltered.map((item, index) => (
            <NotesListItem
              startAnimation={deleteMode}
              key={`${index}${index}`}
              note={item[1]}
            />
          ))
        ) : (
          <EmptyList type="note" />
        )}
      </View>
    </ScrollView>
  );
};
