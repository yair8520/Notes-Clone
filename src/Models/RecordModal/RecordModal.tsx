/* eslint-disable quotes */
import { View, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import styles from './RecordModalStyles';
import { useAppDispatch } from '../../Redux';
import Lottie from 'lottie-react-native';
import { Layout } from '../../Components/Layout';
import { IconButton } from 'react-native-paper';
import { onStartRecord, onStopRecord } from '../../Components/Recorder/helper';
import { IPlayer } from '../../Components/Recorder/RecorderProps';
import RNFetchBlob from 'rn-fetch-blob';
import { getTimeStamp } from '../../Utils/Time';
import { NText } from '../../Components';
import { addRecord } from '../../Features/Record/RecordSlice';
const SoundAnim = require('../../Assets/Images/SoundAnim.json');
const MiceAnim = require('../../Assets/Images/MiceAnim.json');
export const RecordModal = ({ modal: { closeModal } }: any) => {
  const dispatch = useAppDispatch();
  const dirs = RNFetchBlob.fs.dirs;

  const [player, setPlayer] = useState<IPlayer>({
    currentPosition: 0,
    isRecording: false,
    currentMetering: 0,
    file: `${dirs.CacheDir}/${getTimeStamp()}.mp3`,
    duration: 1,
  });
  const pressHandler = () => {
    if (player.isRecording) {
      onStopRecord(setPlayer, onSaveRecord);
      closeModal();
    } else {
      onStartRecord(setPlayer, player.file!);
    }
  };
  const onSaveRecord = () => {
    dispatch(
      addRecord({
        data: {
          duration: String(player.currentPosition),
          url: `file://${player.file}`!,
        },
      })
    );
  };
  return (
    <TouchableWithoutFeedback onPress={() => closeModal()}>
      <View style={styles.centeredView}>
        <View style={styles.body}>
          <View onStartShouldSetResponder={() => true}>
            <Layout style={[styles.modalView]}>
              <View style={styles.inputCon}>
                {player.isRecording ? (
                  <Lottie source={SoundAnim} autoPlay style={styles.icon} />
                ) : (
                  <Lottie
                    source={MiceAnim}
                    autoPlay
                    loop={false}
                    style={styles.icon}
                  />
                )}
              </View>
              {!!player.currentPosition && (
                <NText variant="H2">{player.currentPosition}</NText>
              )}
              <View style={styles.button}>
                <IconButton
                  icon={player.isRecording ? 'stop' : 'record-circle-outline'}
                  iconColor={player.isRecording ? '#66ccff' : 'red'}
                  size={50}
                  onPress={pressHandler}
                />
              </View>
            </Layout>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
