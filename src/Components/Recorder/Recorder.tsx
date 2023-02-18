import { View } from 'react-native';
import React, { useState } from 'react';
import { IPlayer, RecorderProps } from './RecorderProps';
import styles from './RecorderStyles';
import { RecordItem } from './RecordItem';
import {
  onPausePlay,
  onStartPlay,
  onStartRecord,
  onStopPlay,
  onStopRecord,
} from './helper';
import { useAppDispatch } from '../../Redux';
import { addRecord } from '../../Features/Notes/NotesSlice';

export const Recorder = ({ noteId, currentNote }: RecorderProps) => {
  const dispatch = useAppDispatch();
  const [player, setPlayer] = useState<IPlayer>({
    currentPosition: 0,
    isRecording: false,
    currentMetering: 0,
    file: currentNote?.record ?? '',
    duration: 0,
  });
  const saveRecord = () => {
    dispatch(addRecord({ file: player.file!, noteId }));
  };
  const removeRecord = () => {
    setPlayer(() => {
      return {
        currentPosition: 0,
        isRecording: false,
        currentMetering: 0,
        file: '',
        duration: 0,
      };
    });
    dispatch(addRecord({ file: '', noteId }));
  };
  return (
    <View style={styles.container}>
      <RecordItem
        player={player}
        onStartRecord={() => onStartRecord(setPlayer)}
        onStopRecord={() => {
          saveRecord();
          onStopRecord(setPlayer);
        }}
        onRemoveRecord={removeRecord}
        onStartPlay={() => onStartPlay(player.file!, setPlayer)}
        onPausePlay={() => {
          onPausePlay();
        }}
        onStopPlay={() => {
          setPlayer((p) => {
            return {
              ...p,
              currentPosition: 0,
            };
          });
          onStopPlay();
        }}
      />
    </View>
  );
};
