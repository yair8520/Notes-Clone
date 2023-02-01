/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, ScrollView, Image, Dimensions } from 'react-native';
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
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { useModal } from 'react-native-modalfy';
import { List } from 'react-native-paper';
import { actionList, onPressAddImage } from './helper';
const windowHeight = Dimensions.get('window').height;

export const NoteEditor = ({ navigation, route }: NoteEditorProps) => {
  const { noteId } = route?.params ?? '0';
  const { openModal } = useModal();
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
  const image = currentNote?.[1].image?.base64;
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
  console.log(actionList);
  const richTextRef = useRef<RichEditor | any>();

  const richTextHandle = (descriptionText: string) => {
    if (descriptionText) {
      setDescHTML(descriptionText);
    } else {
      setDescHTML('');
    }
  };
  const onInsertLink = () => {
    richTextRef.current?.dismissKeyboard();
    const insert = (title: string, value: string) => {
      richTextRef.current?.insertLink(title || value, value);
    };
    openModal('LinkModal', { insert });
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
                  ref={richTextRef}
                  autoCapitalize={'sentences'}
                  onChange={richTextHandle}
                  initialContentHTML={descHTML}
                  placeholder="Write your cool content here :)"
                  androidHardwareAccelerationDisabled={true}
                  style={styles.richTextEditorStyle}
                  allowsLinkPreview={true}
                  initialHeight={windowHeight - 110}
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
        <RichToolbar
          editor={richTextRef}
          onPressAddImage={() => onPressAddImage(richTextRef)}
          onInsertLink={onInsertLink}
          style={styles.toolbar}
          iconMap={{
            keyboard: () => <List.Icon icon={'keyboard'} />,
            undo: () => <List.Icon icon={'undo'} />,
            redo: () => <List.Icon icon={'redo'} />,
            underline: () => <List.Icon icon={'format-underline'} />,
            italic: () => <List.Icon icon={'format-italic'} />,
            link: () => <List.Icon icon={'link'} />,
            checkboxList: () => <List.Icon icon={'format-list-checkbox'} />,
            orderedList: () => <List.Icon icon={'format-list-numbered'} />,
            unorderedList: () => <List.Icon icon={'format-list-group'} />,
            image: () => <List.Icon icon={'file-image-plus'} />,
          }}
          actions={actionList}
        />

        <FloatingButton data={currentNote?.[1]} noteId={id} />
      </View>
    </>
  );
};
