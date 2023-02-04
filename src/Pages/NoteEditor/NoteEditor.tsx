import { View, ScrollView, Image } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import { NoteEditorProps } from './NoteEditorProps';
import styles from './NoteEditorStyles';
import { FloatingButton } from '../../Components/FloatingButton';
import { NText } from '../../Components/Text';
import { NoteHeader } from '../../Components/Headers/NoteHeader';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { addNote } from '../../Features/Notes/NotesSlice';
import { getCurrentDate, getCurrentTime } from '../../Utils/Time';
import { uid } from 'uid';
import { getNotes } from '../../Features/Notes/NotesSelectors';
import { TouchableOpacity } from 'react-native';
import { Pressable } from 'react-native';
import { RichEditor } from 'react-native-pell-rich-editor';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { ToolBar } from './ToolBar';
import { useHideTabBar } from '../../Hooks/useHideTabBar';

export const NoteEditor = ({ navigation, route }: NoteEditorProps) => {
  useHideTabBar(navigation);
  const { noteId } = route?.params ?? '0';
  const notes = useAppSelector(getNotes);
  const currentNote = useMemo(() => {
    return Object.entries(notes).find((item) => {
      return item[0] === noteId;
    });
  }, [noteId, notes]);
  const id = useMemo(() => {
    return noteId ? noteId : uid(16);
  }, [noteId]);

  const [descHTML, setDescHTML] = useState(currentNote?.[1].body);
  //const image = currentNote?.[1].image?.base64;
  const sign = currentNote?.[1].sign?.base64;
  const dispatch = useAppDispatch();
  const saveNote = (type: string) => {
    dispatch(
      addNote({
        id,
        type,
        time: getCurrentTime(),
        date: getCurrentDate(),
        body: descHTML!,
      })
    );
  };
  const richTextRef = useRef<RichEditor | any>();
  const richTextHandle = (descriptionText: string) => {
    setDescHTML(descriptionText);
  };

  return (
    <>
      <NoteHeader addNote={saveNote} navigation={navigation} />
      <View style={styles.mainCon}>
        <ScrollView contentContainerStyle={styles.content}>
          <Pressable onPress={() => richTextRef.current?.dismissKeyboard()}>
            <View style={styles.container}>
              <TouchableOpacity style={styles.editorTouch} activeOpacity={1}>
                <RichEditor
                  renderLoading={() => (
                    <ActivityIndicator
                      animating={true}
                      color={MD2Colors.red800}
                    />
                  )}
                  ref={richTextRef}
                  autoCapitalize={'sentences'}
                  onChange={richTextHandle}
                  initialContentHTML={descHTML}
                  placeholder="Write your note here :)"
                  androidHardwareAccelerationDisabled={true}
                  style={styles.richTextEditorStyle}
                  allowsLinkPreview={true}
                  initialHeight={450}
                />
              </TouchableOpacity>
              {sign && (
                <>
                  <NText style={styles.title} variant="H2">
                    Your Signature
                  </NText>
                  <NText style={styles.label} variant="H3">
                    Sign Pannel - long press for edit can be added to your pfd
                    file
                  </NText>
                  <TouchableOpacity
                    onPress={() => {}}
                    onLongPress={() =>
                      navigation.navigate('DrawPannel', { noteId, sign: true })
                    }
                    style={styles.imgContainer}
                  >
                    <Image
                      style={styles.signimg}
                      source={{ uri: `data:image/jpeg;base64,${sign}` }}
                    />
                  </TouchableOpacity>
                </>
              )}
            </View>
          </Pressable>
        </ScrollView>
        <ToolBar richTextRef={richTextRef} />
        <FloatingButton data={currentNote?.[1]} noteId={id} />
      </View>
    </>
  );
};
