import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NotesListItemProps } from './NotesListItemProps';
import styles from './NotesListItemStyles';
import { NText } from '../../Components';
import { useNavigation } from '@react-navigation/native';
import { JiggleView } from '../../Components/JiggleView';
import { List } from 'react-native-paper';
import { useAppDispatch } from '../../Redux';
import { removeNote } from '../../Features/Notes/NotesSlice';
import { htmlToString } from '../../Helpers/helper';

export const NotesListItem = ({ note, startAnimation }: NotesListItemProps) => {
  const dispatch = useAppDispatch();
  const nav = useNavigation<any>();
  const navToEditor = () => {
    if (!startAnimation) {
      nav.navigate('NoteEditorStack', {
        screen: 'NoteEditor',
        params: { noteId: note.id },
      });
    }
  };
  const deleteNote = () => {
    dispatch(removeNote({ noteId: note.id }));
  };

  return (
    <View style={styles.con}>
      <JiggleView startAnimation={startAnimation}>
        {startAnimation && (
          <View style={styles.deleteButton}>
            <TouchableOpacity onPress={deleteNote} style={styles.button}>
              <List.Icon color={'white'} icon="close" />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          disabled={startAnimation}
          onPress={navToEditor}
          onLongPress={() => console.log('long')}
          style={[styles.container, { backgroundColor: note.color }]}
        >
          <NText style={styles.date} bold variant="H4">
            {`${note.date}`}
          </NText>
          <View style={styles.content}>
            <NText style={styles.body} numberOfLines={5}>
              {htmlToString(note.body)}
            </NText>
          </View>
        </TouchableOpacity>
      </JiggleView>
    </View>
  );
};
