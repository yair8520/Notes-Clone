import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { IPlayer } from './RecorderProps';
import Share from 'react-native-share';

const audioRecorderPlayer = new AudioRecorderPlayer();

export const onStartRecord = async (
  handler: (a: any) => void,
  path: string
) => {
  const result = await audioRecorderPlayer.startRecorder(path);
  audioRecorderPlayer.addRecordBackListener((e) => {
    handler((p: IPlayer) => ({
      ...p,
      currentPosition: audioRecorderPlayer.mmssss(
        Math.floor(e.currentPosition)
      ),
      isRecording: true,
    }));
    return;
  });
  console.log('onStartRecord', result);
};
export const onStopRecord = async (
  handler: (a: any) => void,
  save: (a: any) => void
) => {
  const result = await audioRecorderPlayer.stopRecorder();
  audioRecorderPlayer.removeRecordBackListener();

  handler((p: IPlayer) => ({
    ...p,
    isRecording: false,
    file: result,
  }));
  save(result);
};

export const onStartPlay = async (uri: string, handler: (a: any) => void) => {
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
export const onShareAudio = async (url: string) => {
  Share.open({
    url,
    type: 'audio/mp3',
  });
};
