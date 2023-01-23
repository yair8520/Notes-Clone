import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NotesListItemProps } from './NotesListItemProps';
import styles from './NotesListItemStyles';
import { NText } from '../../Components';
import { useNavigation } from '@react-navigation/native';
export const NotesListItem = ({ note }: NotesListItemProps) => {
  const nav = useNavigation();
  const navToEditor = () => {
    nav.navigate('NoteEditor', { noteId: note.id });
  };
  return (
    <TouchableOpacity onPress={navToEditor} style={styles.container}>
      <NText style={styles.date} bold variant="H4">
        {`${note.date}`}
      </NText>
      <View style={styles.content}>
        <NText bold variant="H2">
          {note.headline}
        </NText>
        <NText numberOfLines={2} variant="H4">
          {note.body}
        </NText>
      </View>
    </TouchableOpacity>
  );
};
