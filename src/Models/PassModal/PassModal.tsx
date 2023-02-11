/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
import { View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { PassModalProps } from './PassModalProps';
import styles from './PassModalStyles';
import { PatternLock } from '@shanshang/react-native-pattern-lock';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { getPass } from '../../Features/Links/LinksSelectors';
import { addMessage, setPass } from '../../Features/Links/LinkSlice';
import { tabBarStyle } from '../../Navigation';

export const PassModal = ({ navigation, route }: PassModalProps) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: { ...tabBarStyle },
      });
  }, [navigation]);
  const { next, noteId, category, handler } = route.params ?? {};
  const pass = useAppSelector(getPass);
  const firstTime = useMemo(() => {
    return !pass;
  }, []);
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>('Enter your Password Pattern');
  const onCheck = (p: string) => {
    if (!pass) {
      dispatch(setPass({ pass: p }));
      setMessage('Repeat Pattern');
      return true;
    } else {
      if (p === pass) {
        if (firstTime) {
          dispatch(addMessage({ msg: 'Pattern as register' }));
        }
        navigateNext();
        return true;
      }
      setMessage('Not correct Please Try Again');
      return false;
    }
  };
  const navigateNext = () => {
    if (next === -1) navigation.goBack();

    if (handler) {
      handler?.();
      return navigation.navigate('Links');
    } else {
      navigation.navigate('Notes', {
        screen: 'NoteEditorStack',
        params: {
          screen: 'NoteEditor',
          params: { noteId, category },
        },
      });
    }
  };
  return (
    <View style={[styles.modalView]} onStartShouldSetResponder={() => true}>
      <PatternLock message={message} onCheck={onCheck} />
    </View>
  );
};
