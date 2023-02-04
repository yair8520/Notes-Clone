/* eslint-disable curly */
import { View, ScrollView } from 'react-native';
import React from 'react';
import { NotesListProps } from './NotesListProps';
import styles from './NotesListStyles';
import { getNotes } from '../Features/Notes/NotesSelectors';
import { useAppSelector } from '../Redux';
import { NotesListItem } from './NotesListItem';
import { EmptyList } from '../Components/EmptyList';
import { useNotesFilter } from '../Hooks/useNotesFilter';
import { Inote, INote } from '../Features/Notes/NotesTypes';

export const NotesList = ({
  type,
  deleteMode,
  searchQuery,
  filterDir,
}: NotesListProps) => {
  let notes: INote = useAppSelector(getNotes);
  const notesFiltered: any = useNotesFilter({
    notes,
    searchQuery,
    type,
    filterDir,
  });
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View>
        {notesFiltered && notesFiltered.length !== 0 ? (
          notesFiltered.map((item: Inote[], index: any) => (
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
