import { View } from 'react-native';
import React, { useState } from 'react';
import { IPlayer, RecorderProps } from './RecorderProps';
import styles from './RecorderStyles';
import { RecordItem } from './RecordItem';
import { onPausePlay, onStartPlay, onStopPlay } from './helper';
import { useAppDispatch } from '../../Redux';
import { removeRecord } from '../../Features/Record/RecordSlice';

export const Recorder = ({ recordId, url }: RecorderProps) => {
  const dispatch = useAppDispatch();
  const [player, setPlayer] = useState<IPlayer>({
    currentPosition: 0,
    isRecording: false,
    currentMetering: 0,
    file: url,
    duration: 1,
  });

  const onRemoveRecord = () => {
    setPlayer(() => {
      return {
        currentPosition: 0,
        isRecording: false,
        currentMetering: 0,
        file: '',
        duration: 0,
      };
    });
    dispatch(removeRecord({ id: recordId }));
  };
  return (
    <View style={styles.container}>
      <RecordItem
        player={player}
        onRemoveRecord={onRemoveRecord}
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
