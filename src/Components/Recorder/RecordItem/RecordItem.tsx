import { View } from 'react-native';
import React from 'react';
import { RecordItemProps } from './RecordItemProps';
import styles from './RecordItemStyles';
import { List, ProgressBar } from 'react-native-paper';
import { RotateView } from '../../Animations/RotateView';
import { NText } from '../../Text';
import { msToTime } from '../../../Helpers/helper';
import { onShareAudio } from '../helper';

export const RecordItem = ({
  onPausePlay,
  onStopPlay,
  onStartPlay,
  onRemoveRecord,
  player,
}: RecordItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <>
          <View style={styles.barContainer}>
            <NText>{msToTime(player.currentPosition)}</NText>
            <ProgressBar
              style={styles.bar}
              progress={player.currentPosition / player.duration}
            />
            <NText>{msToTime(player.duration)}</NText>
          </View>
          <View style={styles.buttons}>
            <RotateView onPress={onStartPlay}>
              <List.Icon icon={'play'} />
            </RotateView>
            <RotateView onPress={onPausePlay}>
              <List.Icon icon={'pause'} />
            </RotateView>
            <RotateView onPress={onStopPlay}>
              <List.Icon icon={'stop'} />
            </RotateView>

            <RotateView onPress={onRemoveRecord}>
              <List.Icon icon={'delete'} />
            </RotateView>
            <RotateView onPress={() => onShareAudio(player.file!)}>
              <List.Icon icon={'share'} />
            </RotateView>
          </View>
        </>
      </View>
    </View>
  );
};
