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
import RNFetchBlob from 'rn-fetch-blob';
import { getTimeStamp } from '../../Utils/Time';

export const Recorder = ({ noteId, currentNote }: RecorderProps) => {
  const dispatch = useAppDispatch();
  const [player, setPlayer] = useState<IPlayer>({
    currentPosition: 0,
    isRecording: false,
    currentMetering: 0,
    file: currentNote?.record ?? '',
    duration: 1,
  });
  const saveRecord = (file: string) => {
    dispatch(addRecord({ file, noteId }));
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
  const dirs = RNFetchBlob.fs.dirs;
  return (
    <View style={styles.container}>
      <RecordItem
        player={player}
        onStartRecord={() =>
          onStartRecord(
            setPlayer,
            player.file || `${dirs.CacheDir}/${getTimeStamp()}.mp3`
          )
        }
        onStopRecord={() => {
          onStopRecord(setPlayer, saveRecord);
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
