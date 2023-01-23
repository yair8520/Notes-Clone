/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { NoteEditorProps } from './NoteEditorProps';
import styles from './NoteEditorStyles';
import { MultiLineInput } from '../../Components/MultiLineInput';
import { FloatingButton } from '../../Components/FloatingButton';
import { NText } from '../../Components/Text';
import { NoteHeader } from '../../Components/Headers/NoteHeader';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { addNote } from '../../Features/Notes/NotesSlice';
import { getCurrentDate, getCurrentTime } from '../../Utils/Time';
import { uid } from 'uid';
import { getNotes } from '../../Features/Notes/NotesSelectors';
import { DrawPannel } from '../../Components/DrawPannel';

export const NoteEditor = ({ navigation, route }: NoteEditorProps) => {
  const [headline, setHeadline] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const note = useAppSelector(getNotes);
  const [option, setOption] = useState<string>('');

  const dispatch = useAppDispatch();
  const saveNote = (type: string) => {
    dispatch(
      addNote({
        id: uid(16),
        type,
        time: getCurrentTime(),
        date: getCurrentDate(),
        headline,
        body,
      })
    );
  };
  return (
    <>
      <NoteHeader addNote={saveNote} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.container}>
          <View style={styles.title}>
            <NText variant="H3">headline</NText>
            <MultiLineInput onChange={setHeadline} value={headline} />
          </View>
          <View style={styles.title}>
            <NText variant="H3">Body</NText>
            <MultiLineInput
              numberOfLines={50}
              style={styles.bodyInput}
              onChange={setBody}
              value={body}
            />
          </View>
          {/* {option === 'Draw' && <DrawPannel />} */}
        </View>
      </ScrollView>
      <FloatingButton setOption={setOption} />
    </>
  );
};
