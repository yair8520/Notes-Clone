/* eslint-disable curly */
import { View, ScrollView } from 'react-native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { NoteEditorProps } from './NoteEditorProps';
import styles from './NoteEditorStyles';
import { FloatingButton } from '../../Components/FloatingButton';
import { NoteHeader } from '../../Components/Headers/NoteHeader';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { addNote } from '../../Features/Notes/NotesSlice';
import { getCurrentDate, getCurrentTime } from '../../Utils/Time';
import { uid } from 'uid';
import { getCategories, getNotes } from '../../Features/Notes/NotesSelectors';
import { RichEditor } from 'react-native-pell-rich-editor';
import { ActivityIndicator } from 'react-native-paper';
import { ToolBar } from './ToolBar';
import { useHideTabBar } from '../../Hooks/useHideTabBar';
import { Recorder, Layout } from '../../Components';
import { getTheme } from '../../Features/General/GeneralSelectors';

export const NoteEditor = ({ navigation, route }: NoteEditorProps) => {
  useHideTabBar(navigation);
  const isDark = useAppSelector(getTheme);
  const { noteId } = route?.params ?? '0';
  const { category } = route?.params;
  const notes = useAppSelector(getNotes);
  const currentNote: any = useMemo(() => {
    return Object.entries(notes).find((item) => {
      return item[0] === noteId;
    });
  }, [noteId, notes]);
  const id = useMemo(() => {
    return noteId ? noteId : uid(16);
  }, [noteId]);
  const [descHTML, setDescHTML] = useState('');
  const categories = useAppSelector(getCategories);
  useEffect(() => {
    richTextRef.current?.setContentHTML(currentNote?.[1].body ?? '');
    setOpenVoiceMemo(!currentNote?.[1].record);
    setSelectedIndex(categories.findIndex((a: any) => a.title === category));
  }, [noteId, currentNote, categories, category]);
  const [openVoiceMemo, setOpenVoiceMemo] = React.useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const dispatch = useAppDispatch();
  const saveNote = () => {
    dispatch(
      addNote({
        id,
        type: categories[selectedIndex].title,
        time: getCurrentTime(),
        date: getCurrentDate(),
        body: descHTML! ?? ' ',
      })
    );
  };

  const richTextRef = useRef<RichEditor | any>();
  const richTextHandle = (descriptionText: string) => {
    setDescHTML(descriptionText);
  };
  return (
    <Layout>
      <NoteHeader
        id={id}
        locked={currentNote?.[1].locked}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        addNote={saveNote}
        navigation={navigation}
      />
      <View style={styles.mainCon}>
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardDismissMode={'on-drag'}
          keyboardShouldPersistTaps={'never'}
        >
          <View style={styles.container}>
            {!openVoiceMemo && (
              <Recorder currentNote={currentNote?.[1]!} noteId={id} />
            )}
            <RichEditor
              focusable={true}
              renderLoading={() => (
                <View style={styles.loading}>
                  <ActivityIndicator
                    size={'large'}
                    animating={true}
                    color={'blue'}
                  />
                </View>
              )}
              startInLoadingState={true}
              ref={richTextRef}
              forceDarkOn={isDark}
              autoCapitalize={'off'}
              onChange={richTextHandle}
              initialContentHTML={descHTML}
              editorStyle={{}}
              placeholder="Write your note here..."
              androidHardwareAccelerationDisabled={true}
              style={styles.richTextEditorStyle}
              allowsLinkPreview={true}
              initialHeight={450}
            />
          </View>
        </ScrollView>
        <ToolBar richTextRef={richTextRef} />
        <FloatingButton
          onPress={() => saveNote()}
          openVoiceMemo={setOpenVoiceMemo}
          data={currentNote?.[1]}
          noteId={id}
        />
      </View>
    </Layout>
  );
};
