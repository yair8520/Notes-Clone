import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NotesListItemProps } from './NotesListItemProps';
import styles from './NotesListItemStyles';
import { NText } from '../../Components';
import { useNavigation } from '@react-navigation/native';
import { JiggleView } from '../../Components/Animations/JiggleView';
import { useAppDispatch } from '../../Redux';
import { removeNote } from '../../Features/Notes/NotesSlice';
import { Icon } from '@ui-kitten/components';
import { extractBody, extractTitle } from '../../Helpers/helper';
import { List } from 'react-native-paper';
import useAnimatedItem from '../../Hooks/useAnimatedItem/useAnimatedItem';
import Animated from 'react-native-reanimated';

export const NotesListItem = ({
  note,
  startAnimation,
  delay = 100,
}: NotesListItemProps) => {
  const dispatch = useAppDispatch();
  const nav = useNavigation<any>();
  const navToEditor = () => {
    if (!startAnimation) {
      if (note.locked) {
        return nav.navigate('password', {
          noteId: note.id,
          category: note.type,
        });
      } else {
        nav.navigate('NoteEditor', {
          noteId: note.id,
          category: note.type,
        });
      }
    }
  };
  const deleteNote = () => {
    dispatch(removeNote({ noteId: note.id }));
  };
  const animatedStyle = useAnimatedItem(delay);
  return (
    <Animated.View style={[animatedStyle]}>
      <JiggleView startAnimation={startAnimation}>
        <TouchableOpacity onPress={navToEditor} style={styles.container}>
          {startAnimation && (
            <View style={styles.deleteButton}>
              <TouchableOpacity onPress={deleteNote} style={styles.button}>
                <Icon name="close" fill={'white'} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          )}
          {note.locked && (
            <List.Icon style={styles.locked} icon={'shield-lock-outline'} />
          )}
          {note.record && (
            <List.Icon style={styles.record} icon={'microphone'} />
          )}
          <View style={styles.content}>
            <View style={styles.verticalLine} />
            <View style={styles.item}>
              <NText numberOfLines={1} bold variant="H3">
                {extractTitle(note.body)}
              </NText>
              <NText numberOfLines={1} variant="H4">
                {extractBody(note.body)}
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
    </Animated.View>
  );
};
