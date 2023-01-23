/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, ScrollView, Image } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
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
import { INote } from '../../Features/Notes/NotesTypes';

export const NoteEditor = ({ navigation, route }: NoteEditorProps) => {
  const { noteId } = route?.params ?? '0';
  const notes = useAppSelector(getNotes);
  const currentNote = useMemo(() => {
    return Object.entries(notes).find((item) => {
      return item[0] === noteId;
    });
  }, [noteId, notes]);
  console.log({ noteId });
  const id = useMemo(() => {
    return noteId ? noteId : uid(16);
  }, [noteId]);
  const image = currentNote?.[1].image?.base64;
  const [headline, setHeadline] = useState<any>(currentNote?.[1]?.headline);
  const [body, setBody] = useState<any>(currentNote?.[1].body);
  const [option, setOption] = useState<string>('');
  const dispatch = useAppDispatch();
  const saveNote = (type: string) => {
    dispatch(
      addNote({
        id,
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
          <View style={styles.imgContainer}>
            {image && (
              <Image
                style={styles.img}
                source={{ uri: `data:image/jpeg;base64,${image}` }}
              />
            )}
          </View>
        </View>
      </ScrollView>
      <FloatingButton noteId={id} setOption={setOption} />
    </>
  );
};
