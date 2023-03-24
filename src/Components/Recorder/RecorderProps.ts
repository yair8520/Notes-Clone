import { RecordBackType } from 'react-native-audio-recorder-player';

export interface RecorderProps {
  [key: string]: any;
  recordId: string;
  url: string;
}
export interface IPlayer extends RecordBackType {
  file?: string;
  duration: number;
}
