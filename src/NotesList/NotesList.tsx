import { View, ScrollView } from 'react-native';
import React, { useMemo } from 'react';
import { NotesListProps } from './NotesListProps';
import styles from './NotesListStyles';
import { getNotes } from '../Features/Notes/NotesSelectors';
import { useAppSelector } from '../Redux';
import { NotesListItem } from './NotesListItem';
import { NText } from '../Components';
import { t } from 'i18next';

export const NotesList = ({ type, filterDir }: NotesListProps) => {
  let notes = useAppSelector(getNotes);
  const notesFiltered = useMemo(() => {
    return Object.entries(notes).filter((item) => item[1].type === type);
  }, [notes, type]);
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.container}>
        {notesFiltered.length !== 0 ? (
          notesFiltered.map((item, index) => (
            <NotesListItem key={`${index}${index}`} note={item[1]} />
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
