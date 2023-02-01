/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {
  actions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import { useModal } from 'react-native-modalfy';
import { List } from 'react-native-paper';
import { actionList } from './Icons';

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
  const [descHTML, setDescHTML] = useState('');
  const [showDescError, setShowDescError] = useState(false);
  const image = currentNote?.[1].image?.base64;
  const sign = currentNote?.[1].sign?.base64;
  const [headline, setHeadline] = useState<any>(currentNote?.[1]?.headline);
  const [body, setBody] = useState<any>(currentNote?.[1].body);
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
  const richText = useRef<RichEditor>();

  const richTextHandle = (descriptionText: React.SetStateAction<string>) => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML('');
    }
  };
  const onInsertLink = () => {
    richText.current?.dismissKeyboard();
    const insert = (title: string, value: string) => {
      richText.current?.insertLink(title || value, value);
    };
    openModal('LinkModal', { insert });
  };
  return (
    <>
      <NoteHeader addNote={saveNote} navigation={navigation} />
      <View style={styles.mainCon}>
        <ScrollView contentContainerStyle={styles.content}>
          <Pressable
            onPress={() => {
              console.log('asd');
              richText.current?.dismissKeyboard();
            }}
          >
            <View style={styles.container}>
              <TouchableOpacity style={styles.editorTouch} activeOpacity={1}>
                <RichEditor
                  ref={richText} // from useRef()
                  onChange={richTextHandle}
                  placeholder="Write your cool content here :)"
                  androidHardwareAccelerationDisabled={true}
                  style={styles.richTextEditorStyle}
                  initialHeight={250}
                />
              </TouchableOpacity>
              {image && (
                <>
                  <NText style={styles.label} variant="H3">
                    Draw Pannel - long press for edit
                  </NText>
                  <TouchableOpacity
                    onPress={() => {}}
                    onLongPress={() =>
                      navigation.navigate('DrawPannel', { noteId })
                    }
                    style={styles.imgContainer}
                  >
                    <Image
                      style={styles.drawImg}
                      source={{ uri: `data:image/jpeg;base64,${image}` }}
                    />
                  </TouchableOpacity>
                </>
              )}
              {sign && (
                <>
                  <NText style={styles.label} variant="H3">
                    Sign Pannel - long press for edit
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
          editor={richText}
          onInsertLink={onInsertLink}
          style={styles.toolbar}
          iconMap={{
            test: () => <List.Icon icon={'folder'} />,
          }}
          actions={actionList}
        />

        {/* <FloatingButton data={currentNote?.[1]} noteId={id} /> */}
      </View>
    </>
  );
};
