import { View, ScrollView } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
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
import { Layout } from '../../Components/Layout';
import { Recorder } from '../../Components/Recorder';
import { getTheme } from '../../Features/General/GeneralSelectors';

export const NoteEditor = ({ navigation, route }: NoteEditorProps) => {
  useHideTabBar(navigation);
  const { noteId } = route?.params ?? '0';
  const { category } = route?.params;
  const notes = useAppSelector(getNotes);
  const currentNote = useMemo(() => {
    return Object.entries(notes).find((item) => {
      return item[0] === noteId;
    });
  }, [noteId, notes]);
  const id = useMemo(() => {
    return noteId ? noteId : uid(16);
  }, [noteId]);

  const categories = useAppSelector(getCategories);
  const [openVoiceMemo, setOpenVoiceMemo] = React.useState<boolean>(
    !currentNote?.[1].record
  );
  const [selectedIndex, setSelectedIndex] = React.useState(
    categories.findIndex((a) => a.title === category)
  );
  const [descHTML, setDescHTML] = useState(currentNote?.[1].body);
  const dispatch = useAppDispatch();
  const saveNote = () => {
    dispatch(
      addNote({
        id,
        type: categories[selectedIndex].title,
        time: getCurrentTime(),
        date: getCurrentDate(),
        body: descHTML!,
      })
    );
  };
  const isDark = useAppSelector(getTheme);

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
              initialFocus={true}
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
              autoCapitalize={'sentences'}
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
