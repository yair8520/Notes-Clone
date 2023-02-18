import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { IPlayer } from './RecorderProps';
const audioRecorderPlayer = new AudioRecorderPlayer();

export const onStartRecord = async (handler: (a: any) => void) => {
  const result = await audioRecorderPlayer.startRecorder();
  audioRecorderPlayer.addRecordBackListener((e) => {
    handler((p: IPlayer) => ({
      ...p,
      duration: e.currentPosition,
      isRecording: true,
    }));
    return;
  });
  console.log('onStartRecord', result);
};
export const onStopRecord = async (handler: (a: any) => void) => {
  const result = await audioRecorderPlayer.stopRecorder();
  audioRecorderPlayer.removeRecordBackListener();
  console.log({ result });
  handler((p: IPlayer) => ({
    ...p,
    isRecording: false,
    file: result,
  }));
};
export const onStartPlay = async (uri: string, handler: (a: any) => void) => {
  console.log('onStartPlay', { uri });
  const msg = await audioRecorderPlayer.startPlayer(uri);
  console.log({ msg });
  audioRecorderPlayer.addPlayBackListener((e) => {
    handler((p: IPlayer) => ({
      ...p,
      currentPosition: e.currentPosition,
      duration: e.duration,
    }));
    return;
  });
};
export const onPausePlay = async () => {
  await audioRecorderPlayer.pausePlayer();
};
export const onStopPlay = async () => {
  console.log('onStopPlay');
  audioRecorderPlayer.stopPlayer();
  audioRecorderPlayer.removePlayBackListener();
};
