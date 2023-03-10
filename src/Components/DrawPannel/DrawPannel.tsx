import { View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { DrawPannelProps } from './DrawPannelProps';
import styles from './DrawPannelStyles';

import { DrawToolBar } from './DrawToolBar';
import { Appbar } from 'react-native-paper';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { addImage, addSign } from '../../Features/Notes/NotesSlice';
import { getNotes } from '../../Features/Notes/NotesSelectors';
export const DrawPannel = ({ route }: DrawPannelProps) => {
  // const { noteId, sign = false } = route.params;
  // const selector = useAppSelector(getNotes);
  // const dispatch = useAppDispatch();
  // const [strokeWidth, setStrokeWidth] = useState<number>();
  // const [color, setColor] = useState<string>();
  // const canvasRef = useRef<SketchCanvasRef>(null);
  // useEffect(() => {
  //   if (canvasRef.current) {
  //     if (sign && selector[noteId]?.sign?.points) {
  //       return canvasRef.current?.addPoints(selector[noteId].sign?.points);
  //     } else if (selector[noteId]?.image?.points) {
  //       canvasRef.current?.addPoints(selector[noteId].image?.points);
  //     }
  //   }
  //   return () => reset();
  // }, []);
  // const nav = useNavigation();
  // const redo = () => {
  //   canvasRef.current?.redo();
  // };
  // const reset = () => {
  //   canvasRef.current?.reset();
  // };
  // const undo = () => {
  //   canvasRef.current?.undo();
  // };
  // const saveImage = () => {
  //   const points = canvasRef.current?.toPoints();
  //   const base64 = canvasRef.current?.toImage()?.encodeToBase64();
  //   if (sign) {
  //     dispatch(addSign({ id: noteId, base64, points }));
  //   } else {
  //     dispatch(addImage({ id: noteId, base64, points }));
  //   }
  //   const resetAction = CommonActions.reset({
  //     index: 0,
  //     routes: [{ name: 'NoteEditor' }],
  //   });
  //   nav.dispatch(resetAction);
  //   canvasRef?.current?.addPoints([]);
  // };
  // return (
  //   <>
  //     <Appbar.Header>
  //       <Appbar.Action icon="content-save" onPress={() => saveImage()} />
  //       <Appbar.Content style={styles.title} title={'Draw Panel'} />
  //       <Appbar.Action icon="arrow-right" onPress={() => nav.goBack()} />
  //     </Appbar.Header>
  //     <View style={styles.container}>
  //       <SketchCanvas
  //         ref={canvasRef}
  //         strokeColor={color}
  //         strokeWidth={strokeWidth}
  //         containerStyle={styles.container}
  //       />
  //     </View>
  //     <DrawToolBar
  //       reset={reset}
  //       redo={redo}
  //       undo={undo}
  //       color={color}
  //       strokeWidth={strokeWidth}
  //       setStrokeWidth={setStrokeWidth}
  //       pickColor={setColor}
  //     />
  //   </>
  // );
};
