import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NotesListItemProps } from './NotesListItemProps';
import styles from './NotesListItemStyles';
import { NText } from '../../Components';
import { useNavigation } from '@react-navigation/native';
import { JiggleView } from '../../Components/JiggleView';
import { useAppDispatch } from '../../Redux';
import { removeNote } from '../../Features/Notes/NotesSlice';
import { Icon } from '@ui-kitten/components';
import { htmlToString } from '../../Helpers/helper';

export const NotesListItem = ({ note, startAnimation }: NotesListItemProps) => {
  const dispatch = useAppDispatch();
  const nav = useNavigation<any>();
  const navToEditor = () => {
    if (!startAnimation) {
      nav.navigate('Notes', {
        screen: 'NoteEditorStack',
        params: { noteId: note.id },
      });
    }
  };
  const deleteNote = () => {
    dispatch(removeNote({ noteId: note.id }));
  };
  return (
    <JiggleView startAnimation={startAnimation}>
      <TouchableOpacity onPress={navToEditor} style={styles.container}>
        {startAnimation && (
          <View style={styles.deleteButton}>
            <TouchableOpacity onPress={deleteNote} style={styles.button}>
              <Icon name="close" fill={'white'} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.content}>
          <View style={styles.verticalLine} />
          <View style={styles.item}>
            <NText bold variant="H2">
              {htmlToString(note.type)}
            </NText>
            <NText numberOfLines={1} variant="H4">
              {htmlToString(note.body)}
            </NText>
          </View>
        </View>
        <View style={styles.date}>
          <View style={styles.rightItem}>
            <NText style={styles.dateText} variant="p">
              {note.date}
            </NText>
            <NText style={styles.dateText} variant="p">
              {note.time}
            </NText>
          </View>
        </View>
      </TouchableOpacity>
    </JiggleView>
  );
};
